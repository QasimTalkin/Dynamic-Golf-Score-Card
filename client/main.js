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

const addUser =  function(e){
  let newPlayer= e.target.playerName.value;
  let playerScore = e.target.playerScore.value;
  e.preventDefault();

  if(newPlayer){
    e.target.playerName.value='';//we make the form empty not the value
    e.target.playerScore.value='';
    Players.insert({name:newPlayer, score:playerScore});
  }

};




Meteor.startup (function() {
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
      <form onSubmit={addUser}>
      <input type='text' name='playerName' placeholder='Player Name'></input>
      <input type='text' name='playerScore' placeholder='Player Score'></input>
      <button>ADD</button>
      </form>
    </div>);
    ReactDom.render(jsx, document.getElementById('app'));
  });
 // this is mongo insert
});
