import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {

  render(){
    return (
      <div key={this.props.player._id} >
        <p className="item">
            {this.props.player.name} has a Score of {this.props.player.score} point(s).
              <button onClick = {() => {
                  Players.update(this.props.player._id, {$inc:{score:-1}});
                  }}> -1 </button>
                  <button onClick = {() => {
                    Players.update(this.props.player._id, {$inc:{score:1}});
                  }}> +1 </button>
              <button onClick = {() => Players.remove(this.props.player._id)}> X </button>
          </p>
      </div>
         );
  }
}//Player


//proptypes requirements

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
