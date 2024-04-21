import React from 'react'
import GameState from './Gamestate' // Importing the GameState component
import './resetbtn.css' // Importing the CSS file for styling

// Defining the Resetbtn component
const Resetbtn = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;; // If the game is in progress, return nothing
  }
  return (
    <button onClick={onReset} className='reset btn'>Play Again</button> // Render a button with the "Play Again" text and the onReset event handler
  )
}

export default Resetbtn // Exporting the Resetbtn component as the default export