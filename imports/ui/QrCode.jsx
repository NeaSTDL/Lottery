import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

var QRCode = require('qrcode.react');

export default class QrCode extends Component{
	render(){
		return (
			<Col xs={12}>
        <div className="panel md-shadow-1">
          <div className="content text-center">
            <QRCode 
              value={"http://192.168.2.235:3000/register/"}
              size={256}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              level={"L"}
            />  
          </div>
        </div>
      </Col>    
		);
	}
}