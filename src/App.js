import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';


class App extends Component {
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
