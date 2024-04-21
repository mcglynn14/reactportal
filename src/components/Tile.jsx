import React from 'react'
import './tile.css'

// Define a functional component called Tile
const Tile = ({ className, value, onClick, playerTurn }) => {
  // Initialize hoverClass variable
  let hoverClass = null;

  // Check if the value is null and playerTurn is not null
  if(value == null && playerTurn != null){
    // Set hoverClass based on the playerTurn value
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }

  // Render the Tile component
  return (
    <>
      <div onClick={onClick} className={`tictactoe-tile ${className} ${hoverClass}`}>{value}</div>
    </>
  )
}

// Export the Tile component as the default export
export default Tile