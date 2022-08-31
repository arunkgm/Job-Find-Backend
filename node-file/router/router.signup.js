const route = require("express").Router();
// import middleware user
// const user = require("../Middleware/authmiddleware");

const fildschema = require("../schema/schema.signup");
// signup service
const datas = require("../services/service.signup");
// post page post schema
const postdetails = require("../schema/postjob.schema");
//employee schema
const empprofile = require ("../schema/schema.Empprofile");
// company schema




//post page post method
route.post("/posts", async (req,res) => {
    
    try{
          const post = await new postdetails({
            companyname: req.body.companyname,
            typeofcompany: req.body.typeofcompany,
            yearofrunning: req.body.yearofrunning,
            locations: req.body.locations,
            summary: req.body.summary,
            HRemailid: req.body.HRemailid,
            contactNo: req.body.contactNo,
            walkindetails: req.body.walkindetails,
            salaryLPA: req.body.salaryLPA,
            companytiming: req.body.companytiming,
            jobrole: req.body.jobrole,
            JobDescription: req.body.JobDescription,
            yearofexperience: req.body.yearofexperience,
            qulification: req.body.qulification,
            shift: req.body.shift,
        });
        let company = await post.save();
        res.status(200).json(company);
    }catch(err){
       res.status(500).send("something error");
    }
    
});

// Home page GET Method

route.get("/get", async (req,res) => {
    try{
        const getAll = await postdetails.find();
        res.status(200).json(getAll);
    }catch (err) {
   res.json({"err":err})
    }
});


// get req by id
route.get("/getPost/:id", async (req,res) => {
    try{
        const getAll = await postdetails.findById(req.params.id);
        res.status(200).json(getAll);
    }catch (err) {
   res.json({"err":err})
    }
});

// Employee profile page 
route.post("/emppost", async (req,res) => {
    try{
        const empprofilepost = await new empprofile({
            Name: req.body.Name,
            Email: req.body.Email,
            State: req.body.State,
            ContactNumber: req.body.ContactNumber,
            Address: req.body.Address,
            Degree: req.body.Degree,
            University: req.body.University,
            collageName: req.body.collageName,
            percentage: req.body.percentage,
            keyskills: req.body.keyskills,
            ITSkills: req.body.ITSkills,
            SchoolName: req.body.SchoolName,
            Mark1: req.body.Mark1,
            Mark2: req.body.Mark2,
            Department: req.body.Department,
            CurrentIndustry: req.body.CurrentIndustry,
            Experience: req.body.Experience,
            Exepectedsalary: req.body.Exepectedsalary,
            Role: req.body.Role,
            userId:req.body.userId,
        })
        let  Employee = await empprofilepost.save()
        res.status(200).json(Employee);
    }catch (err){
        req.status(500).send(" Not post your empdata ");
    }
});

route.get("/getempall", async (req,res) => {
    try{
        const getAll = await empprofile.find();
        res.status(200).json(getAll);
    }catch (err) {
   res.json({"err":err})
    }
});


route.get("/getprofileemp/:id", async (req,res) => {
    try{
        const getempdata = await empprofile.findById(req.users._id);
        res.status(200).json(getempdata);
    }catch (err) {
   res.json({"err":err})
    }
});

route.get("/userId/:userId",  async (req, res) =>{
    try {
      const data = await empprofile.findOne({userId:req.users.userId});
      res.send(data);
    } catch (err) {
      res.status(400).json("Error in Find By UserId");
    }
  });

  route.put("/emp/:userId", async (req,res) =>{
      try{
          console.log(req.params.userId)
          const updateemployee = await empprofile.findOneAndUpdate(
            req.params.userId,
               {
                   $set:req.body,
               },
               {new:true}
            );
            req.status(200).json(updateemployee);
      }catch(err){
          res.status(500).json(err)
      }
  })


module.exports=route;





































