// Games.js
import React from 'react';
import Userinformation from '../../components/Userinformation';
import Game from '../../components/Game';
import gameData from '../../json/games.json';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';
import './games.css';

const Games = () => {
    const user = Userinformation();

    const cardColors = ["#0D47A1", "#FF6F00", "#2196F3", "#00BFA5", "#FF9800", "#9C27B0"];

    return (
        <>
            <header>
                <Nav />
            </header>
            {user && (
                <main className="games-main">
                    <Hero title="Games" />
                    <div className="game-cards">
                        {gameData.map((game, index) => (
                            <Game 
                                key={index} 
                                image={game.image} 
                                url={game.url} 
                                name={game.name} 
                                description={game.description} 
                                style={{ backgroundColor: cardColors[index % cardColors.length] }}
                            />
                        ))}
                    </div>
                    <Gcwhicon />
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Games;
