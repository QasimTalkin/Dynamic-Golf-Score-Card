import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
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

  
