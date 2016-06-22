import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavBar from '../ui/NavBar.jsx';
import RegistryForm from '../ui/RegistryForm.jsx';

import NowPlaying from '../ui/NowPlaying.jsx';

export default class Register extends Component{
	render(){
		return (
      <div>
        <NavBar/>
        <div className="panel md-shadow-1">
          <div className="content">
            <RegistryForm/>
          </div>
        </div>
        <NowPlaying/>
      </div>
    );
	}
}