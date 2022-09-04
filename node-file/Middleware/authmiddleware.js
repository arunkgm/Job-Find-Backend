//  user Login schema
const datas = require("../schema/schema.signup")
// Admin Login 
const adminlogin = require ("../schema/companyschema")



const jwt = require("jsonwebtoken");



async function Tokenauth(req, res, next) {
    req.user = null
    try {
        if (req.headers && req.headers.authorization) {
            const [_, token] = req.headers.authorization.split(" ");
            const user = await jwt.verify(token, "userinfoSecretId");
            if (user.role === "user") {
                const users = await datas.findOne({EmailId:user.EmailId})
                if (users)  {
                    console.log("user")
                    req.user = users
                    next();
                }
            }
            else if (user.role === "admin") {
                const admin = await adminlogin.findOne({EmailId:user.EmailId})
                if (admin)  {
                    console.log("admin")
                    req.user = user
                    next();
                }
            }
            else {
                throw new Error("User doesn't exists")
            }
        } else {
            res.status(403).send("log in")
        }
    } catch (err) {
        res.status(403).send(err.message);
    }
}
module.exports = Tokenauth