const mongoose = require('mongoose');

// Represents a department in the system.
// The name of the department.
// Additional details about the department.
// The name of the consultant assigned to the department.
// The name of the nurse assigned to the department.
// The image URL of the consultant.
// The image URL of the nurse.
// The URL of the first image associated with the department.
// The URL of the second image associated with the department.
// The URL of the third image associated with the department.
// The URL of the map showing the department's location.
const departmentSchema = new mongoose.Schema({
    name: String,
    details: String,
    consultant: String,
    nurse: String,
    consultant_img: String,
    nurse_img: String,
    img_one: String,
    img_two: String,
    img_three: String,
    map: String,
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;