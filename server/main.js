import { Meteor } from 'meteor/meteor';

import {Lottery} from '../imports/api/lottery.js';
import {Profile} from '../imports/api/profile.js';

// Startup Handler
Meteor.startup(function(){
	// Init lottery system
	Lottery.remove({});
	Lottery.insert({isCurrentlyPlaying : false});
});

// If this 
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('participants', function tasksPublication() {
    return Meteor.users.find({'lottery.isParticipating' : true}).fetch();
  });
}

// Set up Meteor Methods
Meteor.methods({
	// Updates the user profile
	createUserProfile : function(userData){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'participant'...
			if( Roles.userIsInRole(Meteor.user(), ['participant']) ){
				// Update their profile
				Profile.insert({
					owner: Meteor.user()._id,
					firstName : userData.firstName,
					lastName : userData.lastName,
          isParticipating: false,
          isWinner: false,
		    });
			}
		}
	},
	// Toggle participation
	toggleParticipation: function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'participant'...
			if( Roles.userIsInRole(Meteor.user(), ['participant']) ){
				// Update their profile
				console.log("Updating participation...");
				console.log(Profile.find({owner:Meteor.userId()}).isParticipating );
				Profile.update({
	        	owner: Meteor.userId()
	      	}, 
		      {
		        $set:{
		          isParticipating: !Profile.find({owner:Meteor.userId()}).isParticipating 
		        }
		      }
		    );
			}
		}
	},
	// Get Participants
	getParticipants: function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'participant'...
			if( Roles.userIsInRole(Meteor.user(), ['participant']) ){
				// Return participant users
				return Meteor.users.find({'lottery.isParticipating' : true}).fetch();
			}
		}
	},



	// Begin lottery
	beginLottery : function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'admin'...
			if( Roles.userIsInRole(Meteor.user(), ['admin']) ){
				// Set lottery as init

				// Get participants with profile
				// Select 5 random participants
				// Add them to the winners  
				
			}
		}
	},
	// Clear participants
	clearParticipants: function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'admin'...
			if( Roles.userIsInRole(Meteor.user(), ['admin']) ){
				// Reset participant property   
				
			}
		} 
	},
	getCurrentUserInfo: function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'participant'...
			if( Roles.userIsInRole(Meteor.user(), ['participant']) ){
				// Return participant users
				console.log("Getting user info...");
				console.log(Meteor.users.find({ _id: Meteor.userId() }, {_id: 1, username: 1, profile: 1}).fetch());
				return Meteor.users.find({ _id: Meteor.userId() }, {_id: 1, username: 1, profile: 1}).fetch();
			}
		}
	}


});

// Override handler for onCreateUser
Accounts.onCreateUser(function(options, user) {
  // Set user role to participant 
  user.roles = ['participant'];
  // Set profile of participant
  user.profile = {
  	isInit: false,
  };
  // Return user
  return user;
});