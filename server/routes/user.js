const express = require("express");
const router = express.Router();
const {admin} = require("../firebaseInitialization");  // Import the already-initialized admin object
const db = admin.firestore();  // Get Firestore database instance

router.get("/:id", (req, res) => {
    db.collection('users').doc(String(req.params.id)).get()
        .then((userInfo) => {
            if (userInfo.exists) {
                return res.json(userInfo.data());
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' });
        });
});

module.exports = router;
