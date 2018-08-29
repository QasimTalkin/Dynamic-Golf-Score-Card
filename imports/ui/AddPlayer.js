import React from 'react';
import {Players} from './../api/players'


export default class AddPlayer extends React.Component {
  addUser (e) {
    let newPlayer= e.target.playerName.value;
    let playerScore = e.target.playerScore.value;
    e.preventDefault();
    //no score value added defaults to 0
    if(isNaN(parseInt(playerScore))){
      playerScore=0;
    }
    if(newPlayer){
      e.target.playerName.value='';//we make the form empty not the value
      e.target.playerScore.value='';
      Players.insert({name:newPlayer, score:parseInt(playerScore)});
    }
  }


  render () {
    return (
      <div className="item">
        {this.props.children}
        <form onSubmit={this.addUser.bind(this)} className="form" >
          <input className="form__input" type='text' name='playerName' placeholder='Player Name'></input>
          <input className="form__input"  type='number' name='playerScore' placeholder='Player Score'></input>
          <button className="button">ADD</button>
        </form>
      </div>
    );
  }
};
