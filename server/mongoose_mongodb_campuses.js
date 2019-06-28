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

const campuses = require('./campuses');

const createCampus = async (namE, citY, countrY, uiD, creatioN) => {
	const campus = new campuses({
		name: namE,
		city: citY,
		country: countrY,
		uid: uiD,
		creation: creatioN,
		elo: 1000
	});
	await campus.save();
};

const getDataCampuses = async () => {
	try {
		return await axios
			.get('https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches')
			.then(res => {
				res.data.map(async e => {
					await createCampus(e.name, e.city, e.country, e.uid, e.creation);
				});
			})
			.finally(() => {});
	} catch (error) {
		console.error(error);
	}
};

getDataCampuses();
