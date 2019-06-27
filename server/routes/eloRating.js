// inspired by https://github.com/moroshko/elo.js/blob/master/elo.js
/*In most of the games, “Actual Score” is either 0 or 1 means player either wins or loose.
K is a constant. If K is of a lower value, then the rating is changed by a small fraction but if K is of a higher value,
then the changes in the rating are significant.
Different organizations set a different value of K.*/

const GAME_STATUS = {
	WIN: 1,
	DRAW: 0.5,
	LOST: 0
};

/**
 *
 * @param {Number} homeTeamElo - ELO of home team
 * @param {Number} awayTeamElo - ELO of away team
 * @param {GAME_STATUS} gameStatus - result from home team point of view (by example GAME_STATUS.LOST)
 * @param {*} K - See the description above
 * @returns {Number} - the first one returns the delta and the seconde one returns the new elo.
 */

function getRatingDelta(homeTeamElo, awayTeamElo, gameStatus, K) {
	if ([0, 0.5, 1].indexOf(gameStatus) === -1) {
		return null;
	}
	const myChanceToWin = 1 / (1 + Math.pow(10, (awayTeamElo - homeTeamElo) / 400));

	return Math.round(K * (gameStatus - myChanceToWin));
}

function getNewRating(homeTeamElo, awayTeamElo, gameStatus, K) {
	return homeTeamElo + getRatingDelta(homeTeamElo, awayTeamElo, gameStatus, K);
}

module.exports = {
	getRatingDelta,
	getNewRating,
	GAME_STATUS
};
