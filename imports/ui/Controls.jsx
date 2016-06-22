import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

export default class Controls extends Component{

  clearParticipants(){
    Meteor.call("clearParticipants");
  }

  beginLottery(){
    Meteor.call("beginLottery");
  }

	render(){
    if(Roles.userIsInRole(Meteor.userId(), 'admin')){
  		return (
  			<Col xs={12}>
          <div className="panel md-shadow-1">
            <div className="content">
              <strong>Controls</strong>
              <Button bsStyle="primary" bsSize="xsmall" className="m-l-10" onClick={this.beginLottery}>Begin Lottery</Button>
              <Button bsStyle="danger" bsSize="xsmall" className="m-l-10" onClick={this.clearParticipants}>Clear Participants</Button>
            </div>
          </div>
        </Col>   
  		);
    } else {
      return null;
    }
	}
}

Controls.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('allUserProfiles');
  return {
    currentUser: Meteor.user(),
  };
}, Controls);