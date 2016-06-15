import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Profile = new Mongo.Collection('profile');

if(Meteor.isServer){
	Meteor.publish("userProfile", function(){
		console.log('user profile');
		return Profile.find();
	});
}