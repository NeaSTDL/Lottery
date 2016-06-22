import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data'; 
import { Lottery } from '../api/lottery.js';
import { Profile } from '../api/profile.js';
import Loader from 'react-loaders';

class NowPlaying extends Component{
  
  render(){
    if(this.props.lottery.length > 0){
      return (
        <Row>
          {this.props.lottery[0].isCurrentlyPlaying ? 
            <Col xs={12}>
              <Well>
                <strong>Lottery currently playing...</strong>
                <div className="center-loader">
                  <Loader type="pacman"/>
                </div>
              </Well>
            </Col> : ''
          }
          {this.props.profile[0].isWinner ? 
            <Col xs={12}>
              <Well>
                <div className="text-center">
                  <strong className="winner">YOU ARE A WINNER!!!</strong>
                </div>
              </Well>
            </Col> : ''
          }
        </Row>
      );
    } else {
      return null;
    }
  }
}

NowPlaying.propTypes = {
  lottery: PropTypes.array,
  profile: PropTypes.array,
};

export default createContainer(() => {
  Meteor.subscribe('lotteryPublication');
  Meteor.subscribe('userProfile');
  return {
    lottery: Lottery.find().fetch(),
    profile: Profile.find().fetch(),
  };
}, NowPlaying);