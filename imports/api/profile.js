import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Profile = new Mongo.Collection('profile');

if(Meteor.isServer){
	Meteor.publish("userProfile", function(user_id){
                       console.log('u', user_id);
                       //console.log('2', this.userId);
                       console.log('t', Profile.findOne({owner: user_id}));
		return Profile.find({owner: user_id});
	});
}