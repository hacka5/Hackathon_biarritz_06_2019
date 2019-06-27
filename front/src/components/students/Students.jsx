import React, { Component } from "react";
import StudentsTable from "./StudentsTable";
import { Row, Col, Container } from 'reactstrap';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  
  componentDidMount() {
    // API request, passing the url
    const url = "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders";

        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ students: data })
        })
        .catch(console.log);       
      }

  render() {
    return (
      <Container>
      <h1 style={{textAlign:'center', padding:30}}>Biarritz Wilders "Only"</h1>
      <p style={{textAlign:'center', color:'red', fontSize:17}}>Removes cards from students who are not part of the Biarritz campus.</p>
      <Row>

      {this.state.students.map((student) => (
        
        <Col xs={12} md={6} lg={4} style={{paddingBottom:40}}><StudentsTable {...student} /></Col>
        ))}
        </Row>

        </Container>
    );
  }
}

export default Students;
