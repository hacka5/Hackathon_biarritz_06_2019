import React, { Component } from 'react';
import StudentsCards from './StudentsCards';
import { Row, Col, Container } from 'reactstrap';
import Axios from 'axios';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataStudents: []
		};
	}

	componentDidMount() {
		Axios.get('http://localhost:3002/students')
			.then(res => {
				this.setState({
					dataStudents: res.data
				});
			})
			.catch(e => console.log(e));
	}

	render() {
		return (
			<Container style={{ marginBottom: 100 }}>
				<h1 style={{ textAlign: 'center', paddingTop: 60, marginBottom: 20 }}>Biarritz Wilders "Only"</h1>
				<p
					style={{
						textAlign: 'center',
						fontSize: 20,
						padding: 25,
						margin: '0 auto',
						marginBottom: 40,
						fontWeight: 'bold'
					}}
				>
					⚠⚠️ Some of the following students are not Biarritz Wilders. Who are the infiltrators ? ⚠️⚠️
				</p>
				<Row>
					{this.state.dataStudents.map(student => (
						<Col xs={12} md={6} lg={4} style={{ paddingBottom: 40 }}>
							<StudentsCards {...student} />
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

export default Students;
