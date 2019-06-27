import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="1" lg="1">
              <img
                href="https://github.com/hacka5/Hackathon_biarritz_06_2019"
                src="https://www.yupiik.com/wp-content/uploads/2019/05/GitHub-Mark-250x250.png"
                width="30px"
                height="30px"
              />
            </Col>
            <Col md="11" lg="11">
              Hyver Baptiste | Salvador Ibanez Vanessa | Boléa Laura | Slama
              Nizar | Gagnant Nicolas
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
