const fildschema = require("../schema/schema.signup");
const jwt = require("jsonwebtoken"); 
const userdatas = require("../schema/schema.signup")


const bcrypt = require("bcryptjs");


const firstpage = {
    
// signup page services
    async signUp(req,res){
        try{
            let alreadyEmail = await fildschema.findOne({ EmailId: req.body.EmailId });
            if(alreadyEmail){
                return res.status(400).json("Email exists");
            }
            
            let enter = await bcrypt.hash(req.body.Password,10)
            const data = new fildschema({
                EmailId: req.body.EmailId,
                Password: enter,
                role:"user"
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
    let alreadyEmail = await fildschema.findOne({ EmailId: req.body.EmailId});
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

    let userToken = jwt.sign({_id:user._id,EmailId:user.EmailId,role:user.role},"userinfoSecretId");
       console.log(userToken)
     }catch(err){
        res.status(500).send("error");
     }
    }

}
module.exports = firstpage;




