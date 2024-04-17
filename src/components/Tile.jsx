import React from 'react'
import './tile.css'

const Tile = ({ className, value, onClick, playerTurn }) => {
    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }
  return (
    <>
        <div onClick={onClick} className={`tictactoe-tile ${className} ${hoverClass}`}>{value}</div>
    </>
    
  )
}

export default Tile