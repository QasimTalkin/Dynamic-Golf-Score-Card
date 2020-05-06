console.log('SERVER/MAIN: log');
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players'; // players is the collection from import folder
import { func } from 'prop-types';

Meteor.startup(() => {
//STRAT
var age = 12;
function qasim1() {
     let name = "abul";
     this.age = 22;
     let qasim = { name: 'Qasim', age : '23',
                topo() {
                    setTimeout(()=> {console.log(this.age)}, 1000);
                }
                }
     qasim.topo();
}

qasim1(); // outputs 23
// MAP
let arrr = [6,7,8,8,9,9,33,33]
let newarr = arrr.map((eachArray, indexNum) => eachArray+1 + "@[" + indexNum + "]");
console.log(arrr + " after \n" + newarr);
//OUTPUT
//6,7,8,8,9,9,33,33 after 
//7@[0],8@[1],9@[2],9@[3],10@[4],10@[5],34@[6],34@[7]
});  // end meteor Startup 

 