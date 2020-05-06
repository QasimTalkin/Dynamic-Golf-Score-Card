
//a database export of collection Players collection names player
import {Mongo} from 'meteor/mongo';
//Numeral js to convert position to 1st 2nd 3rd so on. 
import numeral from 'numeral';  
//update edetee fetc from mogo db.
export const Players = new Mongo.Collection('players');



export const calculatePlayerPositions  = (players) => {
let rank = 1;
    return players.map ((player, index)=> {
        if (index !== 0 && players[index-1].score < player.score ) {
            rank++;
        }

        return {
            ...player, 
            rank,
            position: numeral(rank).format('0o') 
        };

    });
 
};