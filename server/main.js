import { Meteor } from 'meteor/meteor';

import {Lottery} from '../imports/api/lottery.js';
import {Profile} from '../imports/api/profile.js';

// Startup Handler
Meteor.startup(function(){
	// Init lottery system
	Lottery.remove({});
	Lottery.insert({isCurrentlyPlaying : false});
});

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
				Profile.find({owner:Meteor.userId()}).forEach(
			    function (elem) {
		        Profile.update(
	            {
                _id: elem._id
	            },
	            {
                $set: {
                   isParticipating: !elem.isParticipating
                }
	            }
		        );
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
				return Profile.find({'isParticipating' : true}).fetch();
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
				Profile.update({isParticipating: true}, {$set: {isParticipating: false }});
			}
		}
	},


	// Begin lottery
	beginLottery : function(){
		let participatingUsers,
				Winners = [],
				interval = null,
				iteration = 0,
				selectionNumber = 5;

		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'admin'...
			if( Roles.userIsInRole(Meteor.user(), ['admin']) ){
				// Set lottery as init
				Lottery.update({}, {$set:{"isCurrentlyPlaying": true}});
				// Get participants
				participatingUsers = Profile.find({isParticipating: true}).fetch();
				// If there are less participants than the limit of winners... 
				if( participatingUsers.length < selectionNumber ){
					// Set all if there are less participants than users to be selected
					Profile.update({}, {$set:{isWinner: true}});
					// Set lottery as init
					Lottery.update({}, {$set:{"isCurrentlyPlaying": false}});
				} else {
					// Select then randomly...
					interval = Meteor.setInterval(function(){
					  // Get random number
						let randNum = Math.floor( Math.random() * participatingUsers.length ); 
						// Get user and set as winner
						Profile.update({owner: participatingUsers[randNum].owner},{$set:{isWinner: true}});
						// Erase winner from the list
						//participatingUsers.splice(randNum, 1);
						// Print winner info
						console.log("Winner #" + (iteration + 1) + "!");
						console.log("    First Name: " +  participatingUsers[randNum].firstName);
						console.log("    Last Name: " + participatingUsers[randNum].lastName );
						// Increment iteration
						iteration++;
						// Clear interval if enough
						if(iteration === selectionNumber){
							Meteor.clearInterval(interval);
							console.log("Interval cleared...");
							console.log("Exiting...");
							// Set lottery as init
							Lottery.update({}, {$set:{"isCurrentlyPlaying": false}});
							return;
						}
					}, 5000);
				}
			}
		}
	},
	getCurrentUserInfo: function(){
		// If user is logged in...
		if( Meteor.user() ){
			// And is in role 'participant'...
			if( Roles.userIsInRole(Meteor.user(), ['participant']) ){
				// Return participant users
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