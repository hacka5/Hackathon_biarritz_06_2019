const express = require('express');
const router = express.Router();
const axios = require('axios');

let dataMatches;

const getData = async () => {
	try {
		return await axios
			.get('https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches')
			.then(res => {
				dataMatches = res.data;
			})
			.finally(() => {
				console.log("it's working mf");
			});
	} catch (error) {
		console.error(error);
	}
};

getData();

router.get('/', async (req, res) => {
	await res.send(dataMatches);
});

module.exports = router;
