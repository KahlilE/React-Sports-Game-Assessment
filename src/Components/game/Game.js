import React from 'react';
import Team from 'C:/Users/Slope/Documents/React/react-sports-game-assessment/src/Components/team/Team.js';


function Game(props) {
    return (
        <div className="Game">
            <h1>Hello and Welcome to Heroes vs Villains</h1>
            
                
                

            <div className="Statistics">
                <Team name="Light" logo="assets\images\light.jpg" />

                <div className="Vs">
                    <h1>Versus</h1>
                </div>

                <Team name="Dark" logo="assets\images\darkness.jpg" />
            </div>
        </div>
    )
}




export default Game;