import {Mongo} from 'meteor/mongo';
//a database export of colelction Players collection names player
export const Players = new Mongo.Collection('players');
