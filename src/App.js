import Game from './Components/game/Game.js';
import Team from './Components/team/Team.js';
import ScoreBoard from './Components/scoreboard/ScoreBoard';

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game />
      <Team />
      <ScoreBoard />
    </div>
  );
}

export default App;
