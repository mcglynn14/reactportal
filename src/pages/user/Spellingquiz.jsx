import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Userinformation from '../../components/Userinformation';
import './spellingquiz.css';

const Spellingquiz = () => {
    const userData = Userinformation();  
    const calculateAge = (dob) => {
        if (!dob) return null;
        const birthDate = new Date(dob);
        const today = new Date();
        const userAge = today.getFullYear() - birthDate.getFullYear();
        return userAge;
    };

    const userAge = userData ? calculateAge(userData.dob) : null; // Add conditional check here
    const [isLoading, setIsLoading] = useState(false);
    const [quiz, setQuiz] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setIsLoading(true);

        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    return;
                }
                const response = await fetch('/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const userData = await response.json();
                console.log('Fetched user data:', userData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        let newQuiz = [];

        if (userAge !== null) {
            if (userAge < 10) {
                newQuiz = [
                    ["Q1: Spell the word cat?", "cat"],
                    ["Q2: Can you spell dog?", "dog"],
                    ["Q3: Spell the word sun?", "sun"],
                    ["Q4: How do you spell ball?", "ball"],
                    ["Q5: Spell the word tree?", "tree"],
                    ["Q6: Can you spell fish correctly?", "fish"],
                    ["Q7: Spell the word bird?", "bird"],
                    ["Q8: How do you spell flower?", "flower"],
                    ["Q9: Spell the word house?", "house"],
                    ["Q10: Can you spell car correctly?", "car"]
                ];
            } else {
                newQuiz = [
                    ["Q1: Spell the word necessary?", "necessary"],
                    ["Q2: How do you spell the word accommodate?", "accommodate"],
                    ["Q3: Can you spell the word separate correctly?", "separate"],
                    ["Q4: Spell the word entrepreneur?", "entrepreneur"],
                    ["Q5: How do you spell the word liaison?", "liaison"],
                    ["Q6: Can you spell the word conscientious correctly?", "conscientious"],
                    ["Q7: Spell the word embarrassment?", "embarrassment"],
                    ["Q8: How do you spell the word privilege?", "privilege"],
                    ["Q9: Can you spell the word fluorescent correctly?", "fluorescent"],
                    ["Q10: Spell the word maintenance?", "maintenance"]
                ];
            }

            setQuiz(newQuiz);
            setAnswers(Array(newQuiz.length).fill(''));
            setFeedbacks(Array(newQuiz.length).fill(''));
            setShowScore(false);
            setScore(0);
        }
    }, [userAge]);

    const handleInputChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        const newFeedbacks = feedbacks.map((_, index) => {
            if (answers[index].trim().toLowerCase() === quiz[index][1].toLowerCase()) {
                newScore++;
                return `Well done! The correct answer is ${quiz[index][1]}.`;
            } else {
                return `Incorrect! The correct answer is ${quiz[index][1]}.`;
            }
        });
        setFeedbacks(newFeedbacks);
        setShowScore(true);
        setScore(newScore);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <header className="">
                <Nav />
            </header>
            <Hero title="Spelling Quiz" />
            {quiz.map((question, index) => (
                <div className="spelling-quizes" key={index}>
                    <label className="quizlabel" htmlFor={`p2userq${index}`}>{question[0]}</label>
                    <input className="quizinput" type="text" id={`p2userq${index}`} value={answers[index]} onChange={(e) => handleInputChange(index, e)} />
                    {showScore ? (
                        <label htmlFor={`p2q${index}feedback`}>Answer: {feedbacks[index]}</label>
                    ) : null}
                    <br />
                </div>
            ))}
            <div className="quiz-buttons">
                <button className="btn submit-button" onClick={handleSubmit}>Submit Answers</button>
                {showScore && <label htmlFor="finalscore" id="finalscore">Your final score is {score}/{quiz.length}.</label>}
                <Link className="btn home-link" to="/dashboard">Dashboard</Link>
            </div>
        </>
    );
};

export default Spellingquiz;
