import React from 'react';
import { Container } from 'reactstrap';
import './Home.css';
import photo from '../../assets/photo_groupe.jpg';

function Home() {
  return (
    <Container>
      <div style={{ margin: 50 }}>
        <h1 className="titre">
          Welcome to the inter-campus hackathon competition
        </h1>
        <h3 className="sousTitre">Present by the Hacka5 team!</h3>
        <img src={photo} alt="photo team" className="photo-decoration" />
      </div>
    </Container>
  );
}

export default Home;
