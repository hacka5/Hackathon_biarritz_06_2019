const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

const { GAME_STATUS, getRatingDelta, getNewRating } = require('./eloRating');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

mongoose
	.connect('mongodb://localhost/hackathon2')
	.then(() => {
		console.log('Connected to mongoDB...');
	})
	.catch(err => console.error('Could not connect to mongoDB...'));

const campusesSchema = new mongoose.Schema({
	name: String,
	city: String,
	country: String,
	uid: String,
	creation: String,
	manager: {
		firstname: String,
		lastname: String
	},
	elo: Number
});

const matchesSchema = new mongoose.Schema({
	homeTeam: String,
	awayTeam: String,
	isoDate: String,
	winnerUid: String
});

const Campuse = mongoose.model('Campuse', campusesSchema);
const Match = mongoose.model('Match', matchesSchema);

const getCampuses = async () => {
	return await Campuse.find();
};

const getMatches = async () => {
	return await Match.find();
};

const eloCalculator = async () => {
	const matches = await getMatches();
	const campuses = await getCampuses();
	let eloMap = new Map();
	let winner;
	let looser;
	let uidDebugApi;
	let eloWinner;
	let eloLoser;
	campuses.map(campus => {
		uidDebugApi = campus.uid;
		if (uidDebugApi === 'bor') {
			uidDebugApi = 'bod';
		}
		if (uidDebugApi === 'buc' && campus.city === 'london') {
			uidDebugApi = 'lon';
		}
		eloMap.set(uidDebugApi, 1000);
	});
	matches.map(match => {
		winner = match.winnerUid;
		if (match.homeTeam === winner) {
			looser = match.awayTeam;
		} else {
			looser = match.homeTeam;
		}
		eloWinner = eloMap.get(winner) + getRatingDelta(eloMap.get(match.homeTeam), eloMap.get(match.awayTeam), 1, 32);
		eloLoser = eloMap.get(looser) + getRatingDelta(eloMap.get(match.homeTeam), eloMap.get(match.awayTeam), 0, 32);

		eloMap.set(winner, eloWinner);
		eloMap.set(looser, eloLoser);

		winner = null;
		looser = null;
		gameStatus = null;
	});
	return await eloMap;
};

router.get('/', async (req, res) => {
	const response = await eloCalculator();
	let eloRankingObject = {};
	response.forEach((v, k) => (eloRankingObject[k] = v));
	await res.json(eloRankingObject);
});

module.exports = router;
