const User = require('../models/User');
user=User.findone

const checkAuthentication = async (req, res, next) => {
    const {username, password} = req.body;
    // Check if the username and password are present in the request body
    if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
    }
    try {
    // Query the database to find a user with the provided username and password
    await User.findOne({ username: username, password:password }, (err, result) => {
        console.log(result);
        // If the user is not found, return an error response
        if (result.length === 0) {
        return res.status(401).json({ message: "Invalid username or password" });
        }
        // If the user is found, attach the user object to the request object and callthe next middleware function
        req.user = result;
        next();
    });
    } catch (err) {
    // If an error occurs, return a server error response
    console.error(err);
    res.status(500).json({ message: "Server error" });
    }
    };

    module.exports = checkAuthentication;





