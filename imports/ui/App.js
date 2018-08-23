import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
export default class App extends React.Component {

    //
    // constructor(props) {
    //   super(props);
    //
    //   this.state = {
    //     isLoading: true,
    //     users: []
    //   }
    // }
    //
    // componentDidMount() {
    //   fetch("https://randomuser.me/api?results=10")
    //   .then(response => response.json())
    //   .then(data =>
    //     this.setState({
    //       isLoading: false,
    //       users: data.results
    //     })
    //   )
    // }


    // <ul>
    // {users.map(user => (
    //   <li>{user.email}</li>
    // ))}
    // </ul>
    render() {

        return (<div>
          <TitleBar title={this.props.title} subtitle = "Created by Abul Qasim @Qasimtalkin"/>
          <PlayerList players={this.props.players}/>
          <AddPlayer/>

         </div>);
      //
    }
  };
