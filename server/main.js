console.log('SERVER/MAIN: log');
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players'; // players is the collection from import folder

Meteor.startup(() => {
//STRAT
let k = 7;

console.log("Starting Qasim");
console.log(Players.find().fetch());
Players.insert({name: 'Qasim', score: 3});
console.log("After");
console.log(Players.find().fetch());

//END
});

 