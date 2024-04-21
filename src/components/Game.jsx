// Game.js
import React from 'react'; // Importing the React library
import { Link } from 'react-router-dom'; // Importing the Link component from the react-router-dom library
import './game.css'; // Importing the CSS file for styling

// Defining a functional component called Game
const Game = ({ url, image, name, description, style }) => (
    <Link to={url} className="game-card" style={style}> {/* Creating a Link component with a URL and CSS class */}
        <img src={image} alt="" className="card-img" /> {/* Displaying an image with a CSS class */}
        <p className="card-text">{name}</p> {/* Displaying the name of the game */}
        <p className="card-text">{description}</p> {/* Displaying the description of the game */}
    </Link>
);

export default Game; // Exporting the Game component as the default export
