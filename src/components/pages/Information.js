import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
class Information extends Component {
  render() {
    return (
      <Container>
      <Row  className="row-first">
        <Col className="sm-12 md-12"><h2 className="">Information</h2><h3></h3></Col>
      </Row>
      <Row>
        <Col className="sm-12 md-12">
          <p>
          The Wave Dissipation System ... innovation in shoreline preservation technology.  
          It is designed to protect beaches , lakes, and rivers from erosion caused by wave energy.  Multiple configurations are available to 
          accomodate the varying shoreline needs.
          </p>
         </Col>
      </Row>
    </Container>
    );

  }

}

export default Information;
