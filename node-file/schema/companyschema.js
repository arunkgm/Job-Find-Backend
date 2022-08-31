const mongoose =  require("mongoose");

const companyloginschema = mongoose.Schema({ // isrole
    EmailId: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
    }
});
module.exports = mongoose.model("companylogins",companyloginschema);