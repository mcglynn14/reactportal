const express = require('express'); // Express framework for building web applications
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Cross-Origin Resource Sharing middleware
const bcrypt = require('bcryptjs'); // Library for hashing passwords
const jwt = require('jsonwebtoken'); // Library for generating and verifying JSON Web Tokens
const User = require('./models/User'); // Import User model

// Import required modules
require('dotenv').config(); // Load environment variables from a .env file
require('./models/Department'); // Import Department model

const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 5001; // Set the port number

app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI; // Get the MongoDB connection URI from environment variables
// Connect to MongoDB using the URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event handler for successful MongoDB connection
mongoose.connection.on('connected', () => { 
  console.log('Connected to MongoDB');
});

// Route handler for fetching user data
app.get('/api/users', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const user = await User.findById(decoded.userId).populate('department_id');

      // The decoded.userId should match the structure used in jwt.sign during login

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return data only for the authenticated user
      const formattedUser = {
        _id: user._id,
        email: user.email,
        forename: user.forename,
        surname: user.surname,
        guardian: user.guardian, // Add this line
        guardian_name: user.guardian_name,
        notes: user.notes, 
        dob: user.dob,
        patient_number: user.patient_number,
        appointment_date: user.appointment_date,
        appointment_notes: user.appointment_notes,
        department_id: user.department_id ? {
          name: user.department_id.name,
          details: user.department_id.details,
          consultant: user.department_id.consultant,
          nurse: user.department_id.nurse,
          consultant_img: user.department_id.consultant_img,
          nurse_img: user.department_id.nurse_img,
          img_one: user.department_id.img_one,
          map: user.department_id.map,
          // Add other department fields as needed
        } : null,
        // Add any additional fields you want to include
      };

      res.json(formattedUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route handler for user login
app.post('/api/login', async (req, res) => {
  try {
    const { patient_number, password } = req.body;
    const user = await User.findOne({ patient_number });

    if (!user) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: user._id,
    };

    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route handler for updating user profile
app.put('/api/updateProfile', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }

      const { fullName, dob, profileImage } = req.body;

      // Find the user by decoded userId
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update user profile fields if provided
      if (fullName) {
        const [forename, surname] = fullName.split(' ');
        user.forename = forename;
        user.surname = surname;
      }

      if (dob) {
        user.dob = dob;
      }

      if (profileImage) {
        // Handle profile image update (if needed)
        // For example, save the image to a storage service and update the user's profileImage field
      }

      // Save the updated user
      await user.save();

      res.json({ message: 'Profile updated successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
