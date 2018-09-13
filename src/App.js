import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      attempt : '',
    }
  }
  render() {
    return (
      <div className="App">
        <CharacterCard value="Hello"/>
        <CharacterCard value="Sittidet"/>
        <CharacterCard value="SaiNt"/>



      </div>
    );
  }
}

export default App;
