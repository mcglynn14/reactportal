const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./models/User');
require('./models/Department');


const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


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
    // Inside the /api/users route
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
    img_two: user.department_id.img_two,
    img_three: user.department_id.img_three,
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

// patient login
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



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});