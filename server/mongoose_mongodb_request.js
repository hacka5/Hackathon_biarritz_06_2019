const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

//MONGOOSE CONNECT
mongoose
	.connect('mongodb://127.0.0.1:27017/hackathon2')
	.then(() => console.log('Connected succesfully to mongoDB...'))
	.catch(err => console.error('Could not connect to mongoDB...', err));

// const campuses = require('./campuses');
const matches = require('./schemas/matches');
// const students = require('./students');

// // // const createCampus = async (namE, citY, countrY, uiD, creatioN, firstName, lastName) => {
// // // 	const campus = new campuses({
// // // 		name: namE,
// // // 		city: citY,
// // // 		country: countrY,
// // // 		uid: uiD,
// // // 		creation: creatioN,
// // // 		manager: {
// // // 			firstname: firstName,
// // // 			lastname: lastName
// // // 		},
// // // 		elo: 1000
// // // 	});
// // // 	await campus.save();
// // // };

const createMatches = async (hometeam, awayteam, isodate, winneruid) => {
	const match = new matches({
		homeTeam: hometeam,
		awayTeam: awayteam,
		isoDate: isodate,
		winnerUid: winneruid
	});
	await match.save();
};

// // const createStudents = async (firstName, lastName, campuS) => {
// // 	const student = new students({
// // 		firstname: firstName,
// // 		lastname: lastName,
// // 		campus: campuS
// // 	});
// // 	await student.save();
// // };

const getData = async () => {
	try {
		return await axios
			.get('https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches')
			.then(res => {
				res.data.map(async e => {
					await createMatches(e.homeTeam, e.awayTeam, e.isoDate, e.winnerUid);
				});
			})
			.finally(() => {});
	} catch (error) {
		console.error(error);
	}
};

getData();

// // router.get('/', async (req, res) => {
// // 	await res.send(dataCampuses);
// // });

// // module.exports = router;
