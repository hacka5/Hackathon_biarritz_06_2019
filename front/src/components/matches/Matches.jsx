import React, { Component } from "react";
import Match from "./MatchesCards";
import { Row, Col, Container } from 'reactstrap';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }
  
  componentDidMount() {
    // API request, passing the url
    const url = "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/matches";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ matches: data })
        })
        .catch(console.log);       
      }

  render() {
    return (
      <Container style={{marginBottom:100}}>
      <h1 style={{textAlign:'center', paddingTop:60, marginBottom:60}}>Inter-campus matches</h1>
      <Row>

      {this.state.matches.map((eachMatch) => (
        
        <Col xs={12} md={6} lg={4} style={{paddingBottom:40}}><Match {...eachMatch} /></Col>
        ))}
        </Row>

        </Container>
    );
  }
}

export default Matches;
