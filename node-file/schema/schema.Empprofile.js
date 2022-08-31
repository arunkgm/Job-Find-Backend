const mongoose =  require("mongoose");


const Empdata = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Degree: {
        type: String,
        required: true,
    },
    University: {
        type: String,
        required: true,
    },
    collageName: {
        type: String,
        required: true,
    },
    percentage: {
        type: String,
        required: true,
    },
    keyskills: {
        type: String,
        required: true,
    },
    ITSkills: {
        type: String,
        required: true,
    },
    SchoolName: {
        type: String,
        required: true,
    },
    Mark1: {
        type: String,
        required: true,
    },
    Mark1: {
        type: String,
        required: true,
    },
    Department: {
        type: String,
        required: true,
    },
    CurrentIndustry: {
        type: String,
        required: true,
    },
    Experience: {
        type: String,
        required: true,
    },
    Exepectedsalary: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("empcollection",Empdata)