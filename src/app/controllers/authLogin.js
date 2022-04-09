const account = require("../models/account");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const JWT_ACCESS_KEY = 'ksdhiu1h2341hksakldjaskldjaslkd123567';
class authLogin {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      console.log(username, password);
//       check('username','username phải trên 3 ký tự').exists().isLength({min: 3}),(req,res)=>{
//         const errors = validationResult(req)
//         if(!errors.isEmpty()){
// return res.status(422).jsonp(errors.arr)
//         }
//       }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      account.create({
        username: username,
        password: hash,
      });
      res.redirect("/login");
    } catch (err) {
      res.json("failed");
    }
  }
  async checkAcc(req, res) {
        try {
        const user = await account.findOne({ username: req.body.username });
        if (!user) {
            res.json("sai tài khoản");
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            res.json("sai mật khẩu");
        }
        if (user && validPassword) {
            const Token =  jwt.sign(
             {
               _id: user.id,
             },
            JWT_ACCESS_KEY,
            { expiresIn: "30s" }
            );
            res.cookie('userId',Token);
            res.redirect("/home");
        }
        } 
        catch (err) {
        res.json("tài khoản lỗi");
        }
    }
  async logoutAcc(req,res){
    const cookie = req.cookies;
   if(cookie){
    res.clearCookie("userId");
   res.redirect("/login");
   }
  }
}
module.exports = new authLogin();
