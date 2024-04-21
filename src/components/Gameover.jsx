import React from 'react'
import GameState from './Gamestate' // Importing the GameState enum from './Gamestate' file
import './gameover.css' // Importing the CSS file for styling

// Defining a functional component called Gameover
const Gameover = ( {gameState} ) => {
    switch(gameState){
        case GameState.inProgress: // If the game is in progress
                return <></> // Return an empty fragment
        case GameState.playerOwins: // If player O wins
                return <div className="game-over">O wins</div>; // Return a div with "O wins" message
        case GameState.playerXwins: // If player X wins
                return <div className="game-over">X wins</div>; // Return a div with "X wins" message
        case GameState.draw: // If the game ends in a draw
                return <div className="game-over">Draw</div>; // Return a div with "Draw" message
        default: // For any other game state
                return <></> // Return an empty fragment
    }
}

export default Gameover // Exporting the Gameover component as the default export