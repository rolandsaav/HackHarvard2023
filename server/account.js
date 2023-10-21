const accounts = {};
const express = require("express");
const app = express();
const router = express.Router()



const registerAccount = (username, password, email) => {


    console.log("Debug: Current accounts:", JSON.stringify(accounts));


    if (accounts[username]) {
        return { success: false, message: 'Username already exists' };
    }
    accounts[username] = { password, email };
    return { success: true, message: 'Account created' };
};


const loginAccount = (username, password) => {
    const account = accounts[username];
    if (!account || account.password !== password) {
        return { success: false, message: 'Invalid username or password' };
    }
    return { success: true, message: 'Logged in' };
};


app.use(express.json());


router.post('/register', (req, res) => {
    console.log("Register")
    const { username, password, email } = req.body;
    const result = registerAccount(username, password, email);
    res.json(result);
});


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = loginAccount(username, password);
    res.json(result);
});


module.exports = router;
