import React, { useState, useEffect } from "react";
import Userinformation from '../../components/Userinformation'; // Importing Userinformation component
import Dashboardhero from '../../components/Dashboardhero'; // Importing Dashboardhero component
import Nav from '../../components/Nav'; // Importing Nav component
import Dashboardcards from "../../components/Dashboardcards"; // Importing Dashboardcards component
import Gcwhicon from '../../components/Gcwhicon'; // Importing Gcwhicon component
import Footer from '../../components/Footer'; // Importing Footer component

const Dashboard = () => {
    const user = Userinformation(); // Fetch user information using Userinformation component
    const [isVisible, setIsVisible] = useState(false); // State variable to track visibility
    const [firstRowFinished, setFirstRowFinished] = useState(false); // State variable to track first row finish

    useEffect(() => {
        // Set a timer to update the visibility state after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);
    
        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleFirstRowFinish = () => {
        setFirstRowFinished(true); // Update the first row finish state
    };

    return (
        <>
            <header>
                <Nav /> // Render the Nav component
            </header>
            {user && ( // Check if user data exists
                <Dashboardhero title={`Welcome ${user.forename}`} subtitle={`You are here for ${user.notes}`} /> // Render the Dashboardhero component with user data
            )}
            <Dashboardcards /> // Render the Dashboardcards component
            <Gcwhicon /> // Render the Gcwhicon component
            <Footer /> // Render the Footer component
        </>
    )
}

export default Dashboard;
