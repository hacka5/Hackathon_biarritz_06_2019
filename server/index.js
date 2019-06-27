const express = require('express');
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');

//SCHEMAS IMPORT
const students = require('./routes/students');
const campuses = require('./routes/campuses');
const matches = require('./routes/matches');
const eloCalculator = require('./routes/elo');

//ALGORITHM IMPORT
const { GAME_STATUS, getRatingDelta, getNewRating } = require('./routes/eloRating');

// MONGOOSE DEPRECATED METHODS
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

//MONGOOSE CONNECT
mongoose
	.connect('mongodb://127.0.0.1:27017/hackathon2')
	.then(() => console.log('Connected succesfully to mongoDB...'))
	.catch(err => console.error('Could not connect to mongoDB...', err));

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
	let eloRankingObject = {};
	response.forEach((v, k) => (eloRankingObject[k] = v));
	await res.json(eloRankingObject);
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`listening on port ${port}...`));
