import React from 'react';
import { Container } from 'reactstrap';
import './Home.css';

function Home() {
	return (
		<Container className='bckgrd'>
			<header>
				<h1 className='titre'>Welcome to the inter-campus hackathon competition</h1>
				<h3 className='sousTitre'>Present by the Hacka5 team!</h3>
			</header>
		</Container>
	);
}

export default Home;
