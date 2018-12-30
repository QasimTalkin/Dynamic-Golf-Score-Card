
import './main.html';
import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'; //track and return changed quries
import App from './../imports/ui/App';
import {Players} from './../imports/api/players'; // imports player collection from monogo






//Meteor START

Meteor.startup (() => {
  Tracker.autorun(()=>{ // trackes colelctions and does something whe
    let players = Players.find({}, {sort: {score: 1}}).fetch();
    let title = 'Golf Score Card';
    ReactDom.render(<App players={players} title={title}/>, document.getElementById('app'));
  });
});
