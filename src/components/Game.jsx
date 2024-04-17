// Game.js
import React from 'react';
import { Link } from 'react-router-dom';
import './game.css';

const Game = ({ url, image, name, description, style }) => (
        <Link to={url} className="game-card" style={style}>
            <img src={image} alt="" className="card-img" />
            <p className="card-text">{name}</p>
            <p className="card-text">{description}</p>
        </Link>
);

export default Game;
