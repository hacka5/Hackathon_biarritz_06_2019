import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from 'reactstrap';
import './style.campus.css';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <div>
        <Card className='card-container'>
          <CardTitle>
            <h2 className="overlay-title"
              style={{
                backgroundColor: '#343a40',
                color: 'white',
                padding: 10,
                fontWeight: 'bold',
                textAlign: 'center',
                
              }}
            >
              {this.props.city.toUpperCase()}
            </h2>
          </CardTitle>

          <CardImg
            top
            width="100%"
            height="200px"
            src={this.props.url}
            alt="Campus image"
            className="overlay"
          />
          <div>
            <CardBody>
              <CardSubtitle>
              <p style={{textAlign:"center", fontSize:18}}>Welcome to <b>{this.props.name}</b></p>
              </CardSubtitle>
              <CardText
                style={{
                  overflow: 'auto',
                  height: 'inherit',
                  textAlign: 'justify',
            
                }}
              >
              <p style={{textAlign:"center"}}>This school was created on <b>{this.props.creation}</b></p>
                <p style={{textAlign:"center"}}>The Campus Manager is <b>{this.props.manager.firstname.toUpperCase()} {this.props.manager.lastname.toUpperCase()}</b></p>
              </CardText>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  
                }}
              />
            </CardBody>
          </div>
        </Card>
      </div>
    );
  }
}

export default Campus;
