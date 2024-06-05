// UserInformation.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// Define a functional component called UserInformation
const UserInformation = () => {
  // Declare a state variable called 'user' and initialize it to null
  const [user, setUser] = useState(null);

  // Use the useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    // Define an async function to fetch user data
    const fetchUserData = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        // If no token is found, log an error and return
        if (!token) {
          console.error('No token found');
          return;
        }

        // Send a GET request to the server to fetch user data
        const response = await axios.get('http://localhost:5001/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // If a valid response is received, set the 'user' state variable
        if (response && response.data) {
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchUserData function
    fetchUserData();
  }, []); // The empty dependency array ensures that the effect runs only once, when the component mounts

  // Return the 'user' state variable
  return user;
};

// Export the UserInformation component as the default export
export default UserInformation;