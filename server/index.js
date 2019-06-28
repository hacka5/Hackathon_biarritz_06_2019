const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//SCHEMAS IMPORT
const students = require('./schemas/students');
const campuses = require('./schemas/campuses');
const matches = require('./schemas/matches');
const eloCalculator = require('./algorithm/elo');

//ALGORITHM IMPORT
const { GAME_STATUS, getRatingDelta, getNewRating } = require('./algorithm/eloRating');

// MONGOOSE DEPRECATED METHODS
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

//MONGOOSE CONNECT
mongoose
	.connect('mongodb://127.0.0.1:27017/hackathon2')
	.then(() => console.log('Connected succesfully to mongoDB...'))
	.catch(err => console.error('Could not connect to mongoDB...', err));

app.use(cors());

app.get('/matches', async (req, res) => {
	const matchesData = await matches.find();
	res.send(matchesData);
});

app.get('/students', async (req, res) => {
	const studentsData = await students.find();
	res.send(studentsData);
});

app.get('/campuses', async (req, res) => {
	const campusesData = await campuses.find();
	res.send(campusesData);
});

app.get('/ranking', async (req, res) => {
	const response = await eloCalculator(campuses, matches, getRatingDelta);
	let eloRankingObjects = [];
	response.forEach((v, k) => {
		eloRankingObjects.push({ team: k, elo: v });
	});
	await res.json(eloRankingObjects);
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`listening on port ${port}...`));
