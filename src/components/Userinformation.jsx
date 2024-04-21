import { useState, useEffect } from 'react';
import axios from 'axios';

const Userinformation = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        // Send GET request to '/api/users' with authorization header
        const response = await axios.get('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.data) {
          // Set the user data in the state
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data);
        }
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);

  // Return the user data
  return user;
};

export default Userinformation;
