import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Instructions from '../ui/Instructions.jsx';
import QrCode from '../ui/QrCode.jsx';
import Controls from '../ui/Controls.jsx';
import Participants from '../ui/Participants.jsx';
import NavBar from '../ui/NavBar.jsx';

export default class Lottery extends Component{
	render(){
		return (
      <div>
        <NavBar/>
        <Row>
          <Col xs={12} md={4}>
            <Row>
              <Instructions/>
              <QrCode/> 
            </Row>
          </Col>
          <Col xs={12} md={8}>
            <Row>
              <Controls/>
              <Participants/>
            </Row>
          </Col>
        </Row>
      </div>
		);
	}
}