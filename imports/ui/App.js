import React from 'react';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
  /* <TitleBar> 
  supplying props to title bar that will render the values on screen based on HTML arguments provided here. 
  */
render() {
        return (<div>
          <TitleBar title={this.props.title} subtitle = "@Qasimtalkin" link= "https://github.com/QasimTalkin"/>
            <div className="wrapper">
              <PlayerList players={this.props.players}/>
              <AddPlayer/>
            </div>
         </div>);
      //
    }
  };

  
