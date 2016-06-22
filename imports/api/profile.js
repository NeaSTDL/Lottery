import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Profile = new Mongo.Collection('profile');

if(Meteor.isServer){
	Meteor.publish("userProfile", function(user_id){
    return Profile.find({owner: user_id});
	});
	Meteor.publish("allUserProfiles", function(){
    return Profile.find();
	});
}