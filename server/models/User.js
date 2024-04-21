const mongoose = require('mongoose');

// Import the mongoose library

// Define the user schema
const userSchema = new mongoose.Schema({
    email: String, // User's email address
    password: String, // User's password
    forename: String, // User's first name
    surname: String, // User's last name
    department: String, // User's department
    guardian: String, // User's guardian
    guardian_name: String, // User's guardian's name
    notes: String, // Additional notes about the user
    dob: Date, // User's date of birth
    patient_number: Number, // User's patient number
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // Reference to the department the user belongs to
    appointment_date: Date, // User's appointment date
    appointment_notes: String, // Notes about the user's appointment
});

// Create the User model using the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;