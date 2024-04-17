import React from 'react'
import GameState from './Gamestate'
import './gameover.css'

const Gameover = ( {gameState} ) => {
  switch(gameState){
    case GameState.inProgress:
        return <></>
    case GameState.playerOwins:
        return <div className="game-over">O wins</div>;
    case GameState.playerXwins:
        return <div className="game-over">X wins</div>;
    case GameState.draw:
        return <div className="game-over">Draw</div>;
    default:
        return <></>
  }
}

export default Gameover