import React, { Component } from 'react';
import Axios from 'axios';

class Matches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataMatches: []
		};
	}

	componentDidMount() {
		Axios.get('http://localhost:3002/matches')
			.then(res => {
				this.setState({
					dataMatches: res.data
				});
			})
			.catch(e => console.log(e));
	}

	render() {
		console.log(this.state.dataMatches);
		return (
			<div>
				{this.state.dataMatches.map((match, i) => {
					return (
						<div key={i}>
							<li>{match.homeTeam}</li>
							<li>{match.awayTeam}</li>
							<li>{match.isoDate}</li>
							<li>{match.winnerUid}</li>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Matches;
