console.log('CLINET/MAIN: log');
import './main.html';
import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

Tracker.autorun(function () {
  console.log(Players.find().fetch());
});
const players = [{_id:'1',name: 'Qasim', score: '25'}, {_id:'2', name : 'Abul', score:'23', }, {_id:'3', name : 'Mike', score:'43', }];
  const renderPlayers = function(playerList){
  return playerList.map(function(player){
  return <p key={player._id}>{player.name} has a Scoer of {player.score} points(s).</p>;

});
};


Meteor.startup (function() {
  let title = 'Score Keeper';
  let name = 'Abul Qasim';
  let jsx =
  (<div>
    <h1>{title}</h1>
    <p> Hey {name}! </p>
    <p> Welcome </p>
    {renderPlayers(players)}
  </div>);
  ReactDom.render(jsx, document.getElementById('app'));

});
