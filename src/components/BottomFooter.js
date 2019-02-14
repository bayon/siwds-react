import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class BottomFooter extends Component {
  render() {
    return (
      <Row>
      <Col style={{textAlign:"center"}}>
      <p>For more information, Please call (843) 697-7584</p>
      <p className="fine-print">Wave Dissipation Systems of Sullivan's Island South Carolina</p>

      </Col>
    </Row>
    );
  }
}

export default BottomFooter;
