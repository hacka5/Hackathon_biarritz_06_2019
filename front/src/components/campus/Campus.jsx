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
        <Card style={{ border: '1px solid grey' }} className='card-container'>
          <CardTitle>
            <h2
              style={{
                backgroundColor: 'rgb(64, 64, 64)',
                color: 'white',
                padding: 20,
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
              <p style={{textAlign:"center"}}>Welcome to <b>{this.props.name}</b></p>
              </CardSubtitle>
              <CardText
                style={{
                  overflow: 'auto',
                  height: 'inherit',
                  textAlign: 'justify',
                  paddingBottom: 15,
                  paddingTop: 15,
                }}
              >
              This school was created on <b>{this.props.creation}</b>
                <p style={{paddingTop:20}}>The Campus Manager is <b>{this.props.manager.firstname.toUpperCase()} {this.props.manager.lastname.toUpperCase()}</b></p>
              </CardText>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 15,
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
