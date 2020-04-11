import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Card from './organism/Card.js';

function App() {
  const information = require('./videos/information.json');
  const cards = information.map((item) => 
  <Card key= {item.id} title= {item.title} channelName={item.channelName} />)
  //const images = 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src= './images/another-way-to-die.jpg' alt="another way to die"/>
        {cards}

      </header>
    </div>
  );
}

export default App;
