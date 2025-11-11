import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate profile picture URL
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // create new user
    const newUser = await new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // Generate JWT token
      generateToken(newUser._id, res);
      // Save user to database
      await newUser.save();
      // Send response
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signupUser controller:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = (req, res) => {
  res.send("Login Route");
  console.log("Login attempt");
};

export const logoutUser = (req, res) => {
  res.send("Logout Route");
  console.log("Logout attempt");
};
