import { useState, useEffect } from 'react';
import axios from 'axios';

const Userinformation = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        const response = await axios.get('http://localhost:5001/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response && response.data) {
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

    fetchUserData();
  }, []);

  return user;
};

export default Userinformation;









// import { useState, useEffect} from 'react';
// import axios from 'axios';

// const Userinformation = () => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const fetchUserData = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             if(!token) {
//                 console.error('No token found');
//                 return;
//             }
//             const response = await axios.get('/api/users', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             console.log('Fetched user data:', response.data); // Log fetched data
//             setUser(response.data);
//         } catch(error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     fetchUserData();
//   }, []);

//   return user;
// }

// export default Userinformation;
