import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

import Participant from "./Participant.jsx";

import {Profile} from '../api/profile.js';

class Participants extends Component{
  renderParticipants() {
    return this.props.participantUsers.map((user) => (
      <Participant key={user._id} FirstName={user.firstName} LastName={user.lastName} />
    ));
  }

  setTableContent(){
    if (this.props.participantUsers.length > 0){
      return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {this.renderParticipants()}
          </tbody>
        </table>);
    }
    else {
      return (<p>There are no participants at the moment.</p>);
    }
  }

	render(){
		return (
      <Col xs={12}>
        <div className="panel md-shadow-1">
          <div className="content">
            <strong>
              Participants ({this.props.participantUsers.length}):
            </strong>
            <div className="table-responsive">
              {this.setTableContent()}
            </div>
          </div>
        </div>
      </Col>
		);
	}
}

Participants.propTypes = {
  participantUsers: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('allUserProfiles');
  return {
      participantUsers: Profile.find({isParticipating: true}).fetch(),
      currentUser: Meteor.user(),
  };
}, Participants);