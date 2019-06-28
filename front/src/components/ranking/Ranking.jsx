import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';

import Axios from 'axios';

class Ranking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataRanking: []
		};
	}

	componentDidMount() {
		Axios.get('http://localhost:3002/ranking')
			.then(res => {
				this.setState({
					dataRanking: res.data
				});
			})
			.catch(e => console.log(e));
	}

	render() {
		const { dataRanking } = this.state;
		console.log(this.state.dataRanking);

		return (
			<Container style={{ marginBottom: 100 }}>
				<h1 style={{ textAlign: 'center', paddingTop: 60, marginBottom: 60 }}>Campus Ranking</h1>

				<Table style={{ width: '70%', margin: '0 auto' }}>
					<thead>
						<tr>
							<th>POSITION</th>
							<th>CAMPUS</th>
							<th>SCORE</th>
						</tr>
					</thead>
					{dataRanking
						.sort((a, b) => {
							return b.elo - a.elo;
						})
						.map((eachRanking, i) => (
							<tbody>
								<tr>
									<th scope='row'>{i + 1}</th>
									<td>{eachRanking.team.toUpperCase()}</td>
									<td>{eachRanking.elo}</td>
								</tr>
							</tbody>
						))}
				</Table>
			</Container>
		);
	}
}

export default Ranking;
