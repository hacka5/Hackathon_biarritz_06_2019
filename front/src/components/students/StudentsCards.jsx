import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  Button
} from 'reactstrap';
import './style.students.css';


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
        return alert("👩🏼‍💻 👨🏼‍💻 I'm a Wilder from Biarritz!!!! 🤓 ")
      }
  }

  render() {
    return this.state.showStudents ? null :(
      <div>
        <Card className='student-card'>
          <CardTitle>
            <h2
              style={{
                backgroundColor: '#343a40',
                color: 'white',
                padding: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 18
              }}
            >
              {this.props.firstname.toUpperCase()} {this.props.lastname.toUpperCase()}
            </h2>
          </CardTitle>
          <div className='div-button-delete'>
              <Button color="warning" aria-label="Close" onClick={() => this.hideStudent()}>Delete student</Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default StudentsCards;
