import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button, FormGroup, FormControl, ControlLabel, Well } from 'react-bootstrap';

import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';

import {Profile} from '../api/profile.js';

class RegistryForm extends Component{

  onProfileFormSubmit(event){
    let profile = {};
    event.preventDefault();
    
    profile = {
      firstName: this.refs.RegistryForm.elements.frmFirstName.value,
      lastName: this.refs.RegistryForm.elements.frmLastName.value,
      isInit: true,
    };
    
    Meteor.call('createUserProfile', profile);
  }

  onToggleParticipation(event){
    event.preventDefault();
    Meteor.call('toggleParticipation');
  }

  renderBlankForm(){
    return (
      <Row>
        <Col xs={12} className="m-t-10 m-b-10">
          <strong>
            Register Form
          </strong>
        </Col>
        <Col xs={12}>
          <Well bsSize="small">
            <span>Please, fill out the following fields to participate in the lottery:</span>
          </Well>
        </Col>
        <Col xs={12}>
          <form onSubmit={this.onProfileFormSubmit.bind(this)} ref="RegistryForm">
            <Row>
              <Col xs={12} sm={6}>
                <FormGroup controlId="frmFirstName">
                  <ControlLabel>First Name</ControlLabel>
                  <FormControl type="text" placeholder="Enter first name"/>
                </FormGroup>
              </Col>
              <Col xs={12} sm={6}>
                <FormGroup controlId="frmLastName">
                  <ControlLabel>Last Name</ControlLabel>
                  <FormControl type="text" placeholder="Enter last name"/>
                </FormGroup>    
              </Col>
            </Row>
            <Button type="submit">
              Register
            </Button>
          </form>
        </Col>
      </Row>);
  }

  renderRegistryInfo(){
    return (
      <Row>
        <Col xs={12}>
          <Well bsSize="sm">
            <strong>
              You have registered successfully!
            </strong>
          </Well>
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <p>This is your profile info:</p>    
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={2}>
              <p>Username:</p>
            </Col>
            <Col xs={12} sm={10}>
              <Well bsSize="sm">
                <p>{this.props.currentUser.username}</p>
              </Well>
            </Col>

            <Col xs={12} sm={2}>
              <p>First Name:</p>
            </Col>
            <Col xs={12} sm={10}>
              <Well bsSize="sm">
                <p>{this.props.profile.firstName}</p>
              </Well>
            </Col>

            <Col xs={12} sm={2}>
              <p>Last Name:</p>
            </Col>
            <Col xs={12} sm={10}>
              <Well bsSize="sm">
                <p>{this.props.profile.lastName}</p>
              </Well>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <div className="text-center">
            <a href="/lottery" className="btn btn-primary">
              Go to lottery
            </a>
            <Button type="button" onClick={this.onToggleParticipation}>
              {this.props.profile.isParticipating ? "Leave Lottery" : "Join Lottery"}
            </Button>
          </div>
        </Col>
      </Row>
    );
  }

  renderNotRegistered(){
    return (
      <Row>
        <Col xs={12}>
          <Well bsSize="sm">
            <strong>
              <p>To set your profile, first register and log as an user in the application!</p>
            </strong>
          </Well>
        </Col>
      </Row>      
    );
  }

  decideReturn(){
    // If user exists
    if(this.props.currentUser){
      if(this.props.profile){
        return this.renderRegistryInfo();
      } else {
        return this.renderBlankForm();
      }
    } else {
      return this.renderNotRegistered();
    }
  }

	render(){
    return this.decideReturn(); 
	}
}

RegistryForm.propTypes = {
  currentUser: PropTypes.object,
  profile: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe("userProfile");

  console.log('User');
  console.log(Meteor.users.find({_id:Meteor.userId()}).fetch());
  console.log('Profile');
  console.log(Profile.find({owner:Meteor.userId()}).fetch());
  console.log('Calling participants...')
  console.log(Meteor.call('getParticipants'));
  return { 
    currentUser: Meteor.user(),
    profile: Profile.find({owner:Meteor.userId()}).fetch(),
  };
}, RegistryForm);

//Roles.userIsInRole(Meteor.user(), ['admin'])