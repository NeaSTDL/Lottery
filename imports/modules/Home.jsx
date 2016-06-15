import React, { Component } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';

import NavBar from '../ui/NavBar.jsx';

export default class Lottery extends Component{
	render(){
		return (
      <div> 
        <NavBar/>
        <Row>
        	<Col xs={12} sm={4}>
        		<Row>
        			<Col xs={12}>
				        <div className="panel md-shadow-1">
				        	<strong>Welcome to the Lottery Application!</strong>
				        	<Well>
				        		<p>This application is a simple project done with the purpose of putting in practice the initial concepts of development with Meteor and React!</p>
				        	</Well>
				        </div>
        			</Col>
        			<Col xs={12}>
        				<div className="panel md-shadow-1">
				        	<strong>Register</strong>
				        	<Well bsSize="sm">
				        		<p>To participate in the lottery, please sign up first and create a profile <a href="/register/">here</a>!</p>
				        	</Well>
				        </div>
        			</Col>
        		</Row>
        	</Col>
        	<Col xs={12} sm={8}>
		        <div className="panel md-shadow-1">
		        	<strong>List of Used Packages</strong>
		        	<Well bsSize="sm">
		        		<p>This application was developed making use of several Meteor and NPM packages which include the following:</p>
		        	</Well>
		        	<table className="table table-stripped">
		        		<thead>
		        			<tr>
			        			<th className="text-center">
			        				Package Name
			        			</th>
			        			<th className="text-center">
			        				Description
			        			</th>
			        			<th className="text-center">
			        				Site
			        			</th>
		        			</tr>
		        		</thead>
		        		<tbody>
		        			<tr>
		        				<td>
		        					<strong>Meteor</strong>
		        				</td>
		        				<td>
		        					Meteor is a complete platform for building web and mobile apps in pure JavaScript.
		        				</td>
		        				<td>
		        					<a href="https://www.meteor.com/">Link</a>
		        				</td>
		        			</tr>
		        			<tr>
		        				<td>
		        					<strong>React</strong>
		        				</td>
		        				<td>
		        					React is an open-source JavaScript library providing a view for data rendered as HTML. 
		        				</td>
		        				<td>
		        					<a href="https://facebook.github.io/react/">Link</a>
		        				</td>
		        			</tr>
		        			<tr>
		        				<td>
		        					<strong>React Router</strong>
		        				</td>
		        				<td>
		        					React Router is a complete routing library for React.
		        				</td>
		        				<td>
		        					<a href="https://github.com/reactjs/react-router">Link</a>
		        				</td>
		        			</tr>
		        			<tr>
		        				<td>
		        					<strong>React Bootstrap</strong>
		        				</td>
		        				<td>
		        					The most popular front-end framework, rebuilt for React.
		        				</td>
		        				<td>
		        					<a href="https://react-bootstrap.github.io/">Link</a>
		        				</td>
		        			</tr>
		        			<tr>
		        				<td>
		        					<strong>QrCode.React</strong>
		        				</td>
		        				<td>
		        					A QRCode component for use with React.
		        				</td>
		        				<td>
		        					<a href="https://github.com/zpao/qrcode.react">Link</a>
		        				</td>
		        			</tr>
		        			<tr>
		        				<td>
		        					<strong>meteor-roles</strong>
		        				</td>
		        				<td>
		        					Authorization package for Meteor - compatible with built-in accounts package.
		        				</td>
		        				<td>
		        					<a href="https://atmospherejs.com/alanning/roles#roles-installing">Link</a>
		        				</td>
		        			</tr>
		        		</tbody>
		        	</table>
		        </div>
        	</Col>
	      </Row>
      </div>
		);
	}
}