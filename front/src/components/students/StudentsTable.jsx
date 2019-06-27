import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import ModalStudent from './ModalStudent';


class StudentsCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showStudents: false
    };
    this.hideStudent = this.hideStudent.bind(this);
  }

  hideStudent() {
      if(this.props.campus != 'bia'){

          this.setState(prevState => ({
              showStudents: true          
          }));
          console.log('close student');
      }else{
        return <ModalStudent />
      }
  }

//   showWinMessage(){
//       if (this.props.campus === 'bia'){
          
//       }
//   }

  render() {
    return this.state.showStudents ? null :(
      <div>
        <Card style={{ border: '1px solid grey' }} isOpen={this.state.showStudents} onClose={this.showStudents}>
          <CardTitle>
            <h2
              style={{
                backgroundColor: 'rgb(64, 64, 64)',
                color: 'white',
                padding: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 15
              }}
            >
              {this.props.firstname.toUpperCase()} {this.props.lastname.toUpperCase()}
            </h2>
          </CardTitle>
          <div>
            <CardBody>
            
              <CardSubtitle>
              <img style={{padding:'15px', float:'left'}}
            width="100px"
            height="100px"
            src='https://cdn-images-1.medium.com/max/1200/1*MccriYX-ciBniUzRKAUsAw.png'
            alt="Student avatar"
          />
              <p style={{textAlign:"center"}}><b>Student of {this.props.campus.toUpperCase()}</b></p>
              </CardSubtitle>
              
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 15,
                }}
              />
              <Button aria-label="Close" onClick={() => this.hideStudent()}>Close Student</Button>
            </CardBody>
          </div>
        </Card>
      </div>
    );
  }
}

export default StudentsCards;
