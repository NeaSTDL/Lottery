import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class Controls extends Component{
	render(){
		return (
			<Col xs={12}>
        <div className="panel md-shadow-1">
          <div className="content">
            <strong>Controls</strong>
            <Button bsStyle="primary" bsSize="xsmall" className="m-l-10">Begin Lottery</Button>
            <Button bsStyle="danger" bsSize="xsmall" className="m-l-10">Clear Participants</Button>
          </div>
        </div>
      </Col>   
		);
	}
}