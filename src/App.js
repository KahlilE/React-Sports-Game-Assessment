import Game from './Components/game/Game.js';


import React from 'react';
import './App.css';

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: 'assets/images/chaos.jpg'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: './assets/images/darkness.jpg'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: './assets/images/light.jpg'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: './assets/images/rose.jpeg'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <div>

      <img src='public\assets\images\chaos.jpg' alt=''/>

      </div>
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
