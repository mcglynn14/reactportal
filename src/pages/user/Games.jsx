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

// Define a functional component called Games
const Games = () => {
    // Get user information using the Userinformation component
    const user = Userinformation();

    // Define an array of card colors
    const cardColors = ["#0D47A1", "#FF6F00", "#2196F3", "#00BFA5", "#FF9800", "#9C27B0"];

    // Render the component
    return (
        <>
            <header>
                <Nav /> // Render the Nav component
            </header>
            {user && ( // Check if user exists
                <main className="games-main">
                    {/* Render the Hero component with a title prop */}
                    <Hero title="Games" />   
                    <div className="game-cards">
                        {gameData.map((game, index) => ( // Iterate over the gameData array
                            <Game 
                                key={index} // Set the key prop to the index
                                image={game.image} // Set the image prop to the game's image
                                url={game.url} // Set the url prop to the game's url
                                name={game.name} // Set the name prop to the game's name
                                description={game.description} // Set the description prop to the game's description
                                style={{ backgroundColor: cardColors[index % cardColors.length] }} // Set the style prop to an object with a background color based on the index
                            />
                        ))}
                    </div>
                    <Gcwhicon /> // Render the Gcwhicon component
                    <Footer /> // Render the Footer component
                </main>
            )}
        </>
    );
};

export default Games; // Export the Games component as the default export
