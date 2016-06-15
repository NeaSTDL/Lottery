import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Instructions extends Component{
	render(){
		return (
			<Col xs={12}>
        <div className="panel md-shadow-1">
          <div className="content">
            <strong>Instructions:</strong>
            <div className="well p-10">
              <p>To play in the lottery, simply scan the QR code on this page and follow the presented instructions to register yourself and participate to win awesome prizes.</p>
            </div>
          </div>
        </div>
      </Col> 
		);
	}
}