import React, { useState, useEffect } from "react";
import Userinformation from "../../components/Userinformation";
import Dashboardhero from "../../components/Dashboardhero";
import Nav from "../../components/Nav";
import Parentdashboardcards from "../../components/Parentdashboardcards";
import Gcwhicon from "../../components/Gcwhicon";
import Footer from "../../components/Footer";
import './dashboard.css';

const Parentdashboard = () => {
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
            {user !== null && ( // Check if user data exists
                <Dashboardhero title={`Welcome ${user.guardian_name}`} subtitle={`You child is here for ${user.notes}`} />
            )}
            <Parentdashboardcards />
            <Gcwhicon />
            <Footer />
        </>
    )
}
export default Parentdashboard;