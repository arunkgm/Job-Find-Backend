const companyloginschema = require("../schema/companyschema")
const jwt = require("jsonwebtoken"); 


const bcrypt = require("bcryptjs");


const firstpage = {
    
// signup page services
    async signUp(req,res){
        try{
            let alreadyEmail = await companyloginschema.findOne({ EmailId: req.body.EmailId });
            if(alreadyEmail){
                return res.status(400).json("Email exists");
            }
            
            let enter = await bcrypt.hash(req.body.Password,10)
            const data = new companyloginschema({
                EmailId: req.body.EmailId,
                Password: enter,
                role:"admin",
                // Usertype: req.body.Usertype,
                // userTypeOption:req.body.userTypeOption,
            });
             let user = await data.save();
            res.status(200).json(user);
        }catch(err){
           res.status(500).send("something error");
        }
        
    },

    // login page services
    async Login(req,res){

     try{
    let alreadyEmail = await companyloginschema.findOne({ EmailId: req.body.EmailId});
      if(!alreadyEmail){
            return res.status(400).json("Invalid Email-Id");
      }
      let PasswordValidation = await bcrypt.compare(
          req.body.Password,
          alreadyEmail.Password
      );
      if(!PasswordValidation){
         return res.status(400).json("Your Pass is Wrong");
      }
       
     let userToken = jwt.sign({_id:admin._id,EmailId:admin.EmailId,role:admin.role},"userinfoSecretId");
    //    res.header("auth",userToken).send(userToken);
       
     }catch(err){
        res.status(500).send("error");
     }
    }

}
module.exports = firstpage;



