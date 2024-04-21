import {React, useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Tictactoeboard from '../../components/Tictactoeboard';
import Gameover from '../../components/Gameover';
import GameState from '../../components/Gamestate';
import Resetbtn from '../../components/Resetbtn';
import gameOverSoundAsset from '../../sounds/game_over.wav';
import clickSoundAsset from '../../sounds/click.wav';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import './tictactoe.css';

// Create audio objects for game sounds
const gameOverSound = new Audio(gameOverSoundAsset)
gameOverSound.volume = 0.2;
const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.5;

// Define player symbols
const Player_x = 'X';
const Player_o = 'O';

// Define winning combinations
const winningCombinations = [
    // rows
    {combo:[0, 1, 2], strikeClass: "strike-row-1"},
    {combo:[3, 4, 5], strikeClass: "strike-row-2"},
    {combo:[6, 7, 8], strikeClass: "strike-row-3"},

    // columns
    {combo:[0, 3, 6], strikeClass: "strike-column-1"},
    {combo:[1, 4, 7], strikeClass: "strike-column-2"},
    {combo:[2, 5, 8], strikeClass: "strike-column-3"},

    // diagonals
    {combo:[0, 4, 8], strikeClass: "strike-diagonal-1"},
    {combo:[2, 4, 6], strikeClass: "strike-diagonal-2"},
];

// Function to check for a winner
function checkWinner(tiles, setStrikeClass, setGameState){
    for(const {combo, strikeClass} of winningCombinations){
        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
            setStrikeClass(strikeClass);
            if(tileValue1 === Player_x){
                setGameState(GameState.playerXwins);
            }
            else{
                setGameState(GameState.playerOwins);
            }
            return;
        }
    }

    const isBoardFull = tiles.every((tile) => tile !== null);
    if(isBoardFull){
        setGameState(GameState.draw);
    }
}

const Tictactoe = () => {
    // State variables
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(Player_x)
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress)

    // Event handler for tile click
    const handleTileClick = (index) => {
        if(gameState !== GameState.inProgress){
            return;
        }

        if(tiles[index] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === Player_x){
            setPlayerTurn(Player_o);
        } else{
            setPlayerTurn(Player_x);
        }
    };
    
    // Event handler for game reset
    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(Player_x);
        setStrikeClass(null);
    }

    // Check for a winner whenever the tiles state changes
    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles]);

    // Play click sound whenever a tile is clicked
    useEffect(() => {
        if(tiles.some((tile) => tile !== null)){
            clickSound.play();
        }
    }, [tiles]);

    // Play game over sound whenever the game state changes
    useEffect(() => {
        if(gameState !== GameState.inProgress){
            gameOverSound.play();
        }
    }, [gameState]);

  return (
    <>
        <header>
            <Nav />
        </header>
        <Hero title="Tic Tac Toe"/>
        <section className="tictactoe-section">
            <Tictactoeboard playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass} />
            <Gameover gameState={gameState}/>
            <Resetbtn gameState={gameState} onReset={handleReset} />
            <Link to='/dashboard' className='btn home-link'>Back to dashboard</Link>
        </section>
        <Gcwhicon />
        <Footer />
    </>
  )
}

export default Tictactoe