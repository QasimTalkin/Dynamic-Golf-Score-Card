console.log('SERVER/MAIN: log');
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players'; // players is the collection from import folder
import { func } from 'prop-types';

Meteor.startup(() => {

        let obj = {
            name: "qasim", 
            qasimN () {
                console.log(`${this.name}`);
            }
        };

        obj.qasimN();

});  // end meteor Startup 

