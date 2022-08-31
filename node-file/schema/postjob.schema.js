const mongoose = require("mongoose");


const postdat = mongoose.Schema({
    // req id
    companyname: {
        type: String,
        required: true,
    },
    typeofcompany: {
        type: String,
        required: true,
    },
    yearofrunning:{
        type:String,
        required: true,
    },
    locations:{
        type:String,
        required: true,
    },
    summary:{
        type:String,
        required: true,
    },
    HRemailid:{
        type:String,
        required: true,
    },
    contactNo:{
        type:String,
        required: true,
    },
    walkindetails:{
        type:String,
        required: true,
    },
    salaryLPA:{
        type:String,
        required: true,
    },
    companytiming:{
        type:String,
        required: true,
    },
    jobrole:{
        type:String,
        required: true,
    },
    JobDescription:{
        type:String,
        required: true,
    },
    yearofexperience:{
        type:String,
        required: true,
    },
    qulification:{
        type:String,
        required: true,
    },
    shift:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model("postdetails",postdat);