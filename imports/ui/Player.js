import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {

  render(){

    let rankColor = `item item--postion-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id}  className={rankColor} >
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name} </h3>
            <p className="player__stats"> 
            
            {this.props.player.position + " place  "} 
            {this.props.player.score} Stroke(s).</p>
          </div>
    
          <div className="player__actions">
            <button className="button button--round" 
              onClick = {() => { 
                if (this.props.player.score <= 0){
                  
                } else
                Players.update(this.props.player._id, {$inc:{score:-1}});
              }}> -1 
            </button>

            <button className="button button--round" 
              onClick = {() => {
              Players.update(this.props.player._id, {$inc:{score:1}});
              }}> +1 
            </button>

            <button className="button button--round" onClick = {() => Players.remove(this.props.player._id)}> X 
            </button>
          </div>
          
              
        </div>
      </div>
         );
  }
}//Player


//proptypes requirements

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
