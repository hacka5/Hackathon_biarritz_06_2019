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
		Axios.get('http://localhost:3002/ranking')
			.then(res => {
				this.setState({
					dataMatches: res.data
				});
			})
			.catch(e => console.log(e));
	}

	render() {
		const { dataMatches } = this.state;
		console.log(this.state.dataMatches);
		return (
			<div>
				<ul>
					<li>{dataMatches.bia}</li>
				</ul>
			</div>
		);
	}
}

export default Matches;
