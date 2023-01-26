const User = require('../models/register');

exports.registerUser = async (req, res) => {
    const { firstName, lastName, address, email, phoneNo, role, createdUsername, createdPassword } = req.body;

    const userExists = await User.userExists(createdUsername);
    if (userExists) {
        return res.json({
            success: false,
            message: "User already exists. Try logging in instead."
        });
    }

    const user = await User({
        firstName,
        lastName,
        address,
        email,
        phoneNo,
        role,
        createdUsername,
        createdPassword
    });

    await user.save(err => {
        if (err) {
            console.error(`Error saving user to the database. >> ${err}`);       // NOTE: If a duplication error occurs, drop the collection and try again
        } else {
            console.log('User saved to database!');
        }
    });

    res.json({
        success: true,
        message: "User Saved to database!"
    });
};

exports.loginUser = async (req, res) => {
    const { loginUsername, loginPassword } = req.body;
    
    const user = await User.findOne({ createdUsername: loginUsername });
    if (!user) {
        return res.json({
            success: false,
            message: "User not found with specified username"
        });
    }
    
    const userMatch = await user.comparePassword(loginPassword);
    if (!userMatch) {
        return res.json({
            success: false,
            message: "Invalid username or password"
        });
    }
    res.json({
        success: true,
        message: "Logged in!",
        userDetails: user
    });
};