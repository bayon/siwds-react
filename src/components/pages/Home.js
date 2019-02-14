import React, { Component } from 'react';
//import RE_Parallax from  '../RE_Parallax.js'
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      
      <Container>
      <Row  className="row-first">
        <Col> <h2 className="">Home</h2><h3>S.I. Systems</h3></Col>
      </Row>
      <Row>
        <Col className="md-12">  
            <p>
              Shoreline erosion is an issue causing property owners and municipalities millions of dollars a year in property losses.  
              The Wave Dissipation System reduces erosion caused by wave energy.  An eco-friendly alternative to sandbags and seawalls, 
              it allows water and sand to pass through the system, which alleviates the scouring associated with other 
              shoreline stabilization systems and the litter associated with sandbags.
            </p>
        </Col>
        
      </Row>
       
      <Row>
      
      </Row>
    </Container>
    );

  }

}

export default Home;
