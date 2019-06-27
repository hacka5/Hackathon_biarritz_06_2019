import React, { Component } from 'react';
import { Card, CardTitle, Button } from 'reactstrap';

class StudentsCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showStudents: false
		};
		this.hideStudent = this.hideStudent.bind(this);
	}

	hideStudent() {
		if (this.props.campus !== 'bia') {
			this.setState(prevState => ({
				showStudents: true
			}));
			console.log('close student');
		} else {
			return alert("👩🏼‍💻 👨🏼‍💻 I'm a Wilder from Biarritz!!!! 🤓 ");
		}
	}

	render() {
		return this.state.showStudents ? null : (
			<div>
				<Card style={{ border: '1px solid grey' }}>
					<CardTitle>
						<h2
							style={{
								backgroundColor: 'rgb(64, 64, 64)',
								color: 'white',
								padding: 10,
								fontWeight: 'bold',
								textAlign: 'center',
								fontSize: 18
							}}
						>
							{this.props.firstname.toUpperCase()} {this.props.lastname.toUpperCase()}
						</h2>
					</CardTitle>
					<div style={{ textAlign: 'center', paddingBottom: 20 }}>
						<Button color='info' aria-label='Close' onClick={() => this.hideStudent()}>
							Delete student
						</Button>
					</div>
				</Card>
			</div>
		);
	}
}

export default StudentsCards;
