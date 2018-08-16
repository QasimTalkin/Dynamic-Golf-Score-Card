console.log('SERVER/MAIN: log');
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players'; // players is the collection from import folder

Meteor.startup(function () {
  Players.insert({
     name: 'Reader', score: 215
   });
   console.log(Players.find().fetch());
});
