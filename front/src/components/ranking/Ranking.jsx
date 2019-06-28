import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';

//import Axios from 'axios';

class Ranking extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataRanking: [
				{
					"team": "bia",
					"elo": 1019
				  },
				  {
					"team": "bor",
					"elo": 1024
				  },
				  {
					"team": "lon",
					"elo": 1010
				  },
				  {
					"team": "ber",
					"elo": 999
				  },
				  {
					"team": "buc",
					"elo": 997
				  },
				  {
					"team": "mar",
					"elo": 1015
				  },
				  {
					"team": "lis",
					"elo": 969
				  },
				  {
					"team": "mad",
					"elo": 982
				  },
				  {
					"team": "lil",
					"elo": 1016
				  },
				  {
					"team": "toul",
					"elo": 1016
				  },
				  {
					"team": "par",
					"elo": 966
				  },
				  {
					"team": "stra",
					"elo": 984
				  },
				  {
					"team": "bru",
					"elo": 970
				  },
				  {
					"team": "tour",
					"elo": 1015
				  }
				 ]
		};
	}

	// componentDidMount() {
	// 	Axios.get('http://localhost:3002/ranking')
	// 		.then(res => {
	// 			this.setState({
	// 				dataRanking: res.data
	// 			});
	// 		})
	// 		.catch(e => console.log(e));
	// }

	componentDidMount() {
		// API request, passing the url
	
			fetch(this.state.dataRanking)
			.then(res => res.json())
			.then((data) => {
			  this.setState({ dataRanking: data })
			})
			.catch(console.log);       
		  }

	render() {
		const { dataRanking } = this.state;
		console.log(this.state.dataRanking);

		return (

			<Container style={{ marginBottom: 100 }}>
				<h1 style={{ textAlign: 'center', paddingTop: 60, marginBottom: 60 }}>Campus Ranking</h1>
					
						<Table style={{width:'70%', margin:'0 auto'}}>
						<thead>
						  <tr>
							<th>POSITION</th>
							<th>CAMPUS</th>
							<th>SCORE</th>
						  </tr>
						</thead>
						{dataRanking.sort((a,b)=>{return b.elo-a.elo}).map((eachRanking, i) => (
						<tbody>
						  <tr>
							<th scope="row">{i+1}</th>
							<td>{eachRanking.team.toUpperCase()}</td>
							<td>{eachRanking.elo}</td>
						  </tr>
						</tbody>))}
					  </Table>
					

			</Container>
			
		);
	}
}

export default Ranking;
