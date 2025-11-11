export const loginUser = (req, res) => {
    res.send("Login Route");
    console.log("Login attempt");
};

export const signupUser = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
    } catch (error) {
        
    }    
};

export const logoutUser = (req, res) => {
    res.send("Logout Route");
    console.log("Logout attempt");
};