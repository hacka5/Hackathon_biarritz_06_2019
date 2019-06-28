import React, { Component } from 'react';
import Campus from './Campus';
import { Row, Col, Container } from 'reactstrap';
import Axios from 'axios';

class Campuses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataCampuses: [],
			photos: [
				'https://wildcodeschool.fr/wp-content/uploads/2018/02/biarritz-banner.jpg',
				'https://wildcodeschool.fr/wp-content/uploads/2017/01/ecole-bordeaux.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2019/02/London-website.jpg',
				'https://wildcodeschool.fr/wp-content/uploads/2019/01/brandenburger-tor-201939_1920-1.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2019/02/Bucharest-nightlife4.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2018/03/marseille-1348711_1920.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2019/01/transport-3895334_1920-1.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2019/01/madrid-ecole-code.jpg',
				'https://www.ngenespanol.com/wp-content/uploads/2018/08/Lille-la-ciudad-de-las-bellas-fachadas.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2017/01/wild-code-school-toulouse-plaza.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2017/04/Ref9_Paris-chgt-climatique.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2017/04/Strasbourg2.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2018/04/Atom-Brussels.jpg',
				'https://wildcodeschool.com/wp-content/uploads//2018/04/Mame_Tours.jpg'
			]
		};
	}

	componentDidMount() {
		Axios.get('http://localhost:3002/campuses')
			.then(res => {
				this.setState({
					dataCampuses: res.data
				});
			})
			.catch(e => console.log(e));
	}

	render() {
		return (
			<Container style={{ marginBottom: 100 }}>
				<h1 style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 40 }}>All Campuses</h1>

				<Row>
					{this.state.dataCampuses.map((campus, index) => (
						<Col xs={12} md={6} lg={4} style={{ paddingBottom: 40 }}>
							<Campus url={this.state.photos[index]} {...campus} />
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default Campuses;
