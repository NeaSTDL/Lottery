import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import AccountsUIWrapper from '../ui/AccountUI.jsx';

export default class NavBar extends Component{
	render(){
		return (
			<Row className="header md-shadow-2 br-b-5 m-b-20">
        <div className="m-l-20">
          <AccountsUIWrapper/>
        </div>
        <Col xs={4} xsOffset={4} sm={1} smOffset={0} >
          <div>
            <img src="/images/logo.png" className="img-responsive"/>
          </div>
        </Col>
        <Col xs={12} md={10}>
          <strong className="fs-18">Meteor Application</strong>
          <h5 className="no-margin m-b-10">Lottery App</h5>
        </Col>
      </Row>
		);
	}
}