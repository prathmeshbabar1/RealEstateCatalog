const router = require('express').Router()

const User = require("../models/User");

router.post('/', async (req, res) => {
  const {email, password } = req.body;
  if ( !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  await User.find({ email: email }).then((user) => {
    if (user.length > 0) return res.status(409).json({ msg: "User already exists" });
  })
  const ppdId = Math.floor((Math.random() * 99)) + "PPD" + Math.floor((Math.random() * 999) + 999);
  const newUser = new User({
    email: email,
    password: password,
    ppdId: ppdId
  });
  newUser.save()
  res.send(newUser)
})

module.exports = router;