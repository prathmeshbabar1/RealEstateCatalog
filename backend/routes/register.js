const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("data from froentend",req.body)
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    await User.find({ email: email }).then((user) => {
      if (user.length > 0)
        return res.status(409).json({ msg: "User already exists" });
    });
    const ppdId =
      Math.floor(Math.random() * 99) +
      "PPD" +
      Math.floor(Math.random() * 999 + 999);
//privacy maintain
    bcrypt.hash(password, 10, async (err, cryptedPassword) => {
      const newUser = await User.create({
        email: email,
        password: cryptedPassword,
        ppdId: ppdId,
      });
      // res.send(newUser)
      return res.status(201).json({
        Status: "Success",
        Message: newUser,
      });
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      Message: err,
    });
  }
});

// router.post("/register", async (req, resp) => {
//   // resp.send("api is in loading.....")
//   try {
//       console.log(req.body)
//       let newUser = new User(req.body)
//       let result = await newUser.save()
//       result = result.toObject();
//       delete result.password
//       // if (result) {
//       //     Jwt.sign({result},jwtKey,{expiresIn:"1h"},(err,token)=>{
//       //         if(err){
//       //             resp.send({ result: "something went wrong" })
//       //         }
//       //         resp.send({result,auth:token})
//       //     })
//       // }
//       resp.send(result)
//       console.log(result)
//   } catch {
//       resp.status(400).json({ message: "'either name,email or password is missing'" })
//   }
// })

module.exports = router;
