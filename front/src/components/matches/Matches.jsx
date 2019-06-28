import React, { Component } from "react";
import Match from "./MatchesCards";
import { Row, Col, Container } from 'reactstrap';
import Axios from 'axios';


class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMatches: [],
    };
  }
  
  componentDidMount() {
		Axios.get('http://localhost:3002/matches')
			.then(res => {
				this.setState({
					dataMatches: res.data
				});
			})
			.catch(e => console.log(e));
	}

  render() {
    return (
      <Container style={{marginBottom:100}}>
      <h1 style={{textAlign:'center', paddingTop:60, marginBottom:60}}>Inter-campus matches</h1>
      <Row>
      
      {this.state.dataMatches.map((eachMatch, i) => (
        <div key={i}>
        <Col xs={12} md={6} lg={4} style={{paddingBottom:40}}><Match {...eachMatch} /></Col>
        </div>
      ))}
        
        </Row>

        </Container>
    );
  }
}

export default Matches;
