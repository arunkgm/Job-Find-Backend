const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./router/router.signup");
const cors = require("cors");
const port = 4001;

// middleware headers
const token = require("./Middleware/authmiddleware")


// user service
const datas = require("./services/service.signup")
// admin servce
const companydatas = require("./services/companyservice");

//middleware
app.use(express.json());
app.use(cors());



//db connectivety
mongoose.connect(
    "mongodb://localhost:27017/Data",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("database startted")
    }

);





// Defining Routers
app.use("/datapush",datas.signUp);
app.use("/login",datas.Login);


//company page  route
app.use("/companysignup",companydatas.signUp);
app.use("/companylogin",companydatas.Login);

// middleware 
app.use(token)
app.use("/",route);





app.listen(port,console.log("server listening at port 4001"));