const mongoose = require('mongoose');

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