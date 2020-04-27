/**
* @file main.js (client side)
* @author Abul Qasim <AbulQasim110@gmail.com>
* @copyright Abul Qasim 2019
*/
import './main.html';
import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
// Tracker auto runs when ever queriers are changed 
import {Tracker} from 'meteor/tracker'; 
import App from './../imports/ui/App';
// importing players mongDB - builds miniMongo on clinet side and allows mgDB commands on client side
import {Players, calculatePlayerPositions} from './../imports/api/players'; // imports player collection from monogo


/** 
* metor startup takes function as argument and calls it once the DOM is ready
* @summary we render jsX on our Dom
*/

Meteor.startup (() => {

  //setTimeout(function(){console.log('Qasim', Players.find().fetch())}, 1000);

  Tracker.autorun(()=>{ 
    console.log(Players.find().fetch());
    let players = Players.find({}, {sort: {score: 1}}).fetch();
    let positionPlayers = calculatePlayerPositions(players);
    let title = 'Golf Score Card';
    ReactDom.render(<App title={title} players={positionPlayers} />, document.getElementById('app'));
  });
});



