console.log('CLINET/MAIN: log');
import './main.html';
import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'; //track and return changed quries
import {Players} from './../imports/api/players'; // imports player collection from monogo

  const renderPlayers = function(playerList){
  return playerList.map(function(player){ //array of JSX expression
  return <p key={player._id}>
          {player.name} has a Scoer of {player.score} points(s).
         </p>;
  });
  };

Meteor.startup (function() {
  Players.insert({name: 'Reader', score:'33'});
  Tracker.autorun(function () { // trackes colelctions and does something when
    let players = Players.find().fetch(); // fetch collection from database
    let title = 'Score Keeper';
    let name = 'Abul Qasim';
    let jsx =
    (<div>
      <h1>{title}</h1>
      <p> Hey {name}! </p>
      <p> Welcome tos my web This is in test satge</p>
      {renderPlayers(players)}
      <form>
      <input type='text' name='player name' placeholder='Player Name'></input>
      <button>Add Player</button>
      </form>
    </div>);
    ReactDom.render(jsx, document.getElementById('app'));
  });
 // this is mongo insert
});
