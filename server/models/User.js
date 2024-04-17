const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    forename: String,
    surname: String,
    department: String,
    guardian: String,
    guardian_name: String,
    notes: String,
    dob: Date,
    patient_number: Number,
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    appointment_date: Date,
    appointment_notes: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;