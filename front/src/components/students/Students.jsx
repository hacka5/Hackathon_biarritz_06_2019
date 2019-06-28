import React, { Component } from "react";
import StudentsCards from "./StudentsCards";
import { Row, Col, Container } from 'reactstrap';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [{
        firstname: "marlène",
        lastname: "angouillant",
        campus: "bia"
        },
        {
        firstname: "mark",
        lastname: "zuckerberg",
        campus: "par"
        },
        {
        firstname: "françois",
        lastname: "lembrouille",
        campus: "bru"
        },
        {
        firstname: "baptiste",
        lastname: "hyver",
        campus: "bia"
        },
        {
        firstname: "hannah",
        lastname: "moncot",
        campus: "bia"
        },
        {
        firstname: "kevin",
        lastname: "boucherit",
        campus: "bia"
        },
        {
        firstname: "louis",
        lastname: "escartin",
        campus: "bia"
        },
        {
        firstname: "sergey",
        lastname: "brin",
        campus: "tour"
        },
        {
        firstname: "stephane",
        lastname: "vivier",
        campus: "bia"
        },
        {
        firstname: "nizar",
        lastname: "slama",
        campus: "bia"
        },
        {
        firstname: "linus",
        lastname: "torvalds",
        campus: "buc"
        },
        {
        firstname: "vanesa",
        lastname: "salvador ibanez",
        campus: "bia"
        },
        {
        firstname: "jim",
        lastname: "decocq",
        campus: "bia"
        },
        {
        firstname: "yann",
        lastname: "bournouville",
        campus: "bia"
        },
        {
        firstname: "nicolas",
        lastname: "gagnant",
        campus: "bia"
        },
        {
        firstname: "nathalie",
        lastname: "balotte",
        campus: "bia"
        },
        {
        firstname: "guilhem",
        lastname: "demont",
        campus: "bia"
        },
        {
        firstname: "stéphane",
        lastname: "van pé",
        campus: "bia"
        },
        {
        firstname: "jonathan",
        lastname: "diniz",
        campus: "bia"
        },
        {
        firstname: "jean-baptiste",
        lastname: "gervais",
        campus: "bia"
        },
        {
        firstname: "larry",
        lastname: "page",
        campus: "bod"
        },
        {
        firstname: "dennis",
        lastname: "ritchie",
        campus: "lon"
        },
        {
        firstname: "laura",
        lastname: "boléa",
        campus: "bia"
        },
        {
        firstname: "fabien",
        lastname: "goyhex",
        campus: "bia"
        },
        {
        firstname: "guillaume",
        lastname: "ribéroux",
        campus: "bia"
        },
        {
        firstname: "perrine",
        lastname: "martyris",
        campus: "bia"
        },
        {
        firstname: "florian",
        lastname: "gardy",
        campus: "bia"
        },
        {
        firstname: "cloé",
        lastname: "truel",
        campus: "bia"
        },
        {
        firstname: "sylène",
        lastname: "manusset",
        campus: "bia"
        },
        {
        firstname: "stéphane",
        lastname: "barucq",
        campus: "bia"
        },
        {
        firstname: "stephane",
        lastname: "jacot",
        campus: "bia"
        },
        {
        firstname: "enzo",
        lastname: "duhalde",
        campus: "bia"
        },
        {
        firstname: "amine",
        lastname: "ben taleb",
        campus: "bia"
        },
        {
        firstname: "sarah",
        lastname: "elyafi",
        campus: "bia"
        },
        {
        firstname: "bat",
        lastname: "man",
        campus: "lon"
        },
        {
        firstname: "ro",
        lastname: "naldo",
        campus: "lis"
        },
        {
        firstname: "didier",
        lastname: "deschamps",
        campus: "toul"
        },
        {
        firstname: "john",
        lastname: "doe",
        campus: "lon"
        },
        {
        firstname: "hanz",
        lastname: "peterwild",
        campus: "ber"
        },
        {
        firstname: "jacob",
        lastname: "typescript",
        campus: "ber"
        },
        {
        firstname: "big",
        lastname: "mac",
        campus: "lon"
        },
        {
        firstname: "maria",
        lastname: "popova",
        campus: "buc"
        },
        {
        firstname: "zinedine",
        lastname: "zidane",
        campus: "mar"
        },
        {
        firstname: "super",
        lastname: "man",
        campus: "lis"
        },
        {
        firstname: "joe",
        lastname: "ker",
        campus: "buc"
        },
        {
        firstname: "céeee",
        lastname: "sharp",
        campus: "par"
        },
        {
        firstname: "jimi",
        lastname: "handricts",
        campus: "stra"
        }
        ],
    };
  }
  
  // componentDidMount() {
  //   // API request, passing the url
  //   const url = "https://us-central1-rc-league.cloudfunctions.net/wildcodeschool/wilders";

  //       fetch(url)
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.setState({ students: data })
  //       })
  //       .catch(console.log);       
  //     }

  render() {
    return (
      <Container style={{marginBottom:100}}>
      <h1 style={{textAlign:'center', paddingTop:60, marginBottom:20}}>Biarritz Wilders "Only"</h1>
      <p style={{textAlign:'center', fontSize:20, padding:25, margin:'0 auto', marginBottom:40, fontWeight:'bold'}}>⚠⚠️ Some of the following students are not Biarritz Wilders. Who are the infiltrators ? ⚠️⚠️</p>
      <Row>

      {this.state.students.map((student) => (
        
        <Col xs={12} md={6} lg={4} style={{paddingBottom:40}}><StudentsCards {...student} /></Col>
        ))}
        </Row>

        </Container>
    );
  }
}

export default Students;
