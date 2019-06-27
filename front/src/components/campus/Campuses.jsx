import React, { Component } from "react";
import Campus from "./Campus";
import { Row, Col, Container } from 'reactstrap';

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: []
    };
  }

  componentDidMount() {
    // API request, passing the url
    const url = "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/campuses";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ campuses: data })
        })
        .catch(console.log);       
      }

  render() {
    return (
      <Container>
      <h1 style={{textAlign:'center', padding:30}}>Campuses</h1>
      
      <Row>
      {this.state.campuses.map((campus) => (
        <Col xs={12} md={6} lg={4} style={{paddingBottom:40}}><Campus {...campus} /></Col>
        ))}
        </Row>
        </Container>
    );
  }
}

export default Campuses;
