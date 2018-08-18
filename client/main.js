console.log('CLINET/MAIN: log');
import './main.html';
import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'; //track and return changed quries
import {Players} from './../imports/api/players'; // imports player collection from monogo

  const renderPlayers = (playerList) => {
  return playerList.map((player)=>{ //after maping
  return <p key={player._id}>
          {player.name} has a Scoer of {player.score} points.
            <button onClick = {() => {
                Players.update({_id:player._id}, {$inc:{score:-1}});
                }}> -1 </button>
                <button onClick = {() => {
                  Players.update({_id:player._id}, {$inc:{score:1}});
                }}> +1 </button>
            <button onClick = {() => Players.remove({ _id:player._id})}> X </button>
         </p>;
  });
  };

const removeUser = (e) => {
  let userId = e.target.id;
  Player.remove({_id:userId});
};

const addUser = (e) => {
  let newPlayer= e.target.playerName.value;
  let playerScore = e.target.playerScore.value;
  e.preventDefault();

  if(newPlayer){
    e.target.playerName.value='';//we make the form empty not the value
    e.target.playerScore.value='';
    Players.insert({name:newPlayer, score:parseInt(playerScore)});
  }

};

Meteor.startup (() => {
  Tracker.autorun(()=>{ // trackes colelctions and does something when
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
      <input type='number' name='playerScore' placeholder='Player Score'></input>
      <button>ADD</button>
      </form>
    </div>);
    ReactDom.render(jsx, document.getElementById('app'));
  });
 // this is mongo insert
});
