import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Userinformation from '../../components/Userinformation';

const Mathquiz = () => {
    const userData = Userinformation();  
    const [userDOB, setUserDOB] = useState(userData.dob);
    const [isLoading, setIsLoading] = useState(false); // No need to set loading initially to true
    const [quiz, setQuiz] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setIsLoading(true); // Set loading to true when component mounts

        // Fetch user data
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
                setUserDOB(userData.dob);
                setIsLoading(false); // Set loading to false after fetching user data
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLoading(false); // Set loading to false in case of error
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        let newQuiz = [];

        const calculateAge = (dob) => {
            const birthDate = new Date(dob);
            const today = new Date();
            const userAge = today.getFullYear() - birthDate.getFullYear();
            return userAge;
        };

        if (userDOB) {
            const age = calculateAge(userDOB);

            if (age < 10) {
                newQuiz = [
                    ["Q1: How many legs does a dog have?", "4"],
                    ["Q2: If you have 3 apples and you eat 1, how many apples are left?", "2"],
                    ["Q3: What comes after 5 in the counting sequence?", "6"],
                    ["Q4: How many sides does a square have?", "4"],
                    ["Q5: How many colors are there in a rainbow?", "7"],
                    ["Q6: If you have 2 bananas and you get 3 more, how many bananas do you have in total?", "5"],
                    ["Q7: What is 2 plus 3?", "5"],
                    ["Q8: How many sides does a triangle have?", "3"],
                    ["Q9: What is 4 minus 1?", "3"],
                    ["Q10: How many eyes does a human have?", "2"]
                ];
            } else {
                newQuiz = [
                    ["Q1: What is 3 + 5?", "8"],
                    ["Q2: Subtract 7 from 15?", "8"],
                    ["Q3: If you have 4 apples and you buy 3 more, how many apples do you have in total?", "7"],
                    ["Q4: How many sides does a triangle have?", "3"],
                    ["Q5: What is 2 × 4?", "8"],
                    ["Q6: If you have 8 marbles and you give away 3, how many marbles do you have left?", "5"],
                    ["Q7: What is 10 − 3?", "7"],
                    ["Q8: What is 7 + 3?", "10"],
                    ["Q9: What is 3 × 3?", "9"],
                    ["Q10: Subtract 9 from 20?", "11"]
                ];
            }

            setQuiz(newQuiz);
            setAnswers(Array(newQuiz.length).fill(''));
            setFeedbacks(Array(newQuiz.length).fill(''));
            setShowScore(false);
            setScore(0);
        }
    }, [userDOB]);

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
            <Hero title="Math Quiz" />
            {quiz.map((question, index) => (
                <div className="mathquizes" key={index}>
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
    )
}

export default Mathquiz;
