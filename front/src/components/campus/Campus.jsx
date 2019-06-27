import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg
} from 'reactstrap';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Card style={{ border: '1px solid grey' }}>
          <CardTitle>
            <h2
              style={{
                backgroundColor: 'rgb(64, 64, 64)',
                color: 'white',
                padding: 20,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              {this.props.city.toUpperCase()}
            </h2>
          </CardTitle>
          <CardImg top width="100%" src="https://wildcodeschool.fr/wp-content/uploads/2018/02/biarritz-banner.jpg" alt="Campus image" />

          <CardBody>
            <CardSubtitle>
              <b>Creation date:</b> {this.props.creation}
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
              Welcome to <b>{this.props.name}</b>
            </CardText>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 15,
              }}
            >
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Campus;
