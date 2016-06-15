import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavBar from '../ui/NavBar.jsx';

export default class Lottery extends Component{
	render(){
		return (
      <div className="wrapper"> 
        <NavBar/>
        {this.props.children}
      </div>
		);
	}
}