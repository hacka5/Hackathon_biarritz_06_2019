import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Row,
} from 'reactstrap';

const Campus = (props) => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://wildcodeschool.fr/wp-content/uploads/2018/02/biarritz-banner.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Biarritz Campus</CardTitle>
              <CardSubtitle>Creation date:</CardSubtitle>
              <CardText>
                Welcome to this.state.campus
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col  md="6">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://wildcodeschool.fr/wp-content/uploads/2018/02/biarritz-banner.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Biarritz Campus</CardTitle>
              <CardSubtitle>Creation date:</CardSubtitle>
              <CardText>
                Welcome to this.state.campus
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Campus;
