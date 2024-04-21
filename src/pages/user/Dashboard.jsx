
import React, { useState, useEffect } from "react";
import Userinformation from '../../components/Userinformation';
import Dashboardhero from '../../components/Dashboardhero';
import Nav from '../../components/Nav';
import Dashboardcards from "../../components/Dashboardcards";
import Gcwhicon from '../../components/Gcwhicon';
import Footer from '../../components/Footer';

const Dashboard = () => {
    const user = Userinformation(); // Fetch user information
    const [isVisible, setIsVisible] = useState(false);
    const [firstRowFinished, setFirstRowFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);
    
        return () => clearTimeout(timer);
    }, []);

    const handleFirstRowFinish = () => {
        setFirstRowFinished(true);
    };

    return (
        <>
            <header>
                <Nav />
            </header>
            {user && ( // Check if user data exists
                <Dashboardhero title={`Welcome ${user.forename}`} subtitle={`You are here for ${user.notes}`} />
            )}
            <Dashboardcards />
            <Gcwhicon />
            <Footer />
        </>
    )
}

export default Dashboard;
