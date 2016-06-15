import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Participant extends Component{
	render(){
		return (
      <tr>
        <td>
          {this.props.FirstName}
        </td>
        <td>
          {this.props.LastName}
        </td>
      </tr>
		);
	}
}