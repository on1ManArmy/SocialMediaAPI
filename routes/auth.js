const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register API
router.post("/register", async (req, res) => {
  try {
    // Generate password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({
      message: "Account created successfully",
      user: user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
