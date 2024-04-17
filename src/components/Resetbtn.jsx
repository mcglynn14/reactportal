import React from 'react'
import GameState from './Gamestate'
import './resetbtn.css'

const Resetbtn = ( {gameState, onReset} ) => {
    if(gameState === GameState.inProgress){
        return;;
    }
  return (
    <button onClick={onReset} className='reset btn'>Play Again</button>
  )
}

export default Resetbtn