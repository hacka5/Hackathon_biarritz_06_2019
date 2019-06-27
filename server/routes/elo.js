const eloCalculator = async (campusModel, matchModel, ratingDelta) => {
	const getCampuses = async () => {
		return await campusModel.find().sort('isoDate');
	};

	const getMatches = async () => {
		return await matchModel.find();
	};
	let matches = await getMatches();
	const campuses = await getCampuses();
	let eloMap = new Map();
	let winner;
	let looser;
	let uidDebugApi;
	let eloWinner;
	let eloLoser;
	campuses.map(campus => {
		uidDebugApi = campus.uid;
		eloMap.set(uidDebugApi, 1000);
	});
	matches = matches.filter(match => {
		return match.winnerUid != null;
	});
	matches.map(match => {
		console.log(match);
		winner = match.winnerUid;
		if (match.homeTeam === winner) {
			looser = match.awayTeam;
		} else {
			looser = match.homeTeam;
		}

		eloWinner = eloMap.get(winner) + ratingDelta(eloMap.get(match.homeTeam), eloMap.get(match.awayTeam), 1, 32);
		eloLoser = eloMap.get(looser) + ratingDelta(eloMap.get(match.homeTeam), eloMap.get(match.awayTeam), 0, 32);

		eloMap.set(winner, eloWinner);
		eloMap.set(looser, eloLoser);

		winner = null;
		looser = null;
		gameStatus = null;
	});
	return await eloMap;
};

module.exports = eloCalculator;
