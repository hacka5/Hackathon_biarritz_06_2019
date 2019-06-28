const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
	homeTeam: {
		type: String,
		required: true
	},
	awayTeam: {
		type: String,
		required: true
	},
	isoDate: {
		type: String,
		required: true
	},
	winnerUid: {
		type: String
	}
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
