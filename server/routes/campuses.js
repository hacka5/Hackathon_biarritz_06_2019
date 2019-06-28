const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	uid: {
		type: String,
		required: true
	},
	creation: {
		type: String,
		required: true
	},
	manager: {
		firstname: {
			type: String
		},
		lastname: {
			type: String
		}
	},
	elo: {
		type: Number,
		required: true
	}
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
