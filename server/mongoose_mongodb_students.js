const axios = require('axios');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

//MONGOOSE CONNECT
mongoose
	.connect('mongodb://127.0.0.1:27017/hackathon2')
	.then(() => console.log('Connected succesfully to mongoDB...'))
	.catch(err => console.error('Could not connect to mongoDB...', err));

const students = require('./students');

const createStudents = async (firstName, lastName, campuS) => {
	const student = new students({
		firstname: firstName,
		lastname: lastName,
		campus: campuS
	});
	await student.save();
};

const getDataStudents = async () => {
	try {
		return await axios
			.get('https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches')
			.then(res => {
				res.data.map(async e => {
					await createStudents(e.firstname, e.lastname, e.campus);
				});
			})
			.finally(() => {});
	} catch (error) {
		console.error(error);
	}
};

getDataStudents();
