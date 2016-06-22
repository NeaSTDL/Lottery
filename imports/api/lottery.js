import { Mongo } from 'meteor/mongo';
 
export const Lottery = new Mongo.Collection('lottery');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('lotteryPublication', function lotteryPublication() {
    return Lottery.find();
  });
}