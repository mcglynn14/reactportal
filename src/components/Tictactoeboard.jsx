import React from 'react'
import Tile from './Tile';
import Strike from './Strike';
import './tictactoeboard.css';

// Define a functional component called Tictactoeboard
const Tictactoeboard = ({ tiles, onTileClick, playerTurn, strikeClass }) => {
  return (
    <>
        {/* Render the tic-tac-toe board */}
        <div className="tictactoe-board">
            {/* Render each tile on the board */}
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} className="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} className="right-border bottom-border"  />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} className="bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} className="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} className="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} className="bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} className="right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} className="right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]} />
            {/* Render the strike component */}
            <Strike strikeClass={strikeClass} />
        </div>
    </>
  )
}

// Export the Tictactoeboard component as the default export of the module
export default Tictactoeboard