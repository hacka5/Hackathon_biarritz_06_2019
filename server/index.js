const express = require('express');
const app = express();
const axios = require('axios');

//ROUTES
const students = require('./routes/students');
const campuses = require('./routes/campuses');
const matches = require('./routes/matches');
const elo = require('./routes/elo');

app.use('/students', students);
app.use('/campuses', campuses);
app.use('/matches', matches);
app.use('/ranking', elo);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`listening on port ${port}...`));
