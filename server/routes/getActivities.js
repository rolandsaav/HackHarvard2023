const express = require('express');
const router = express.Router();
const {admin, db} = require("../firebaseInitialization");  // Import the already-initialized admin object
const { QuerySnapshot } = require("@google-cloud/firestore");


// Define the route that fetches and logs the activities
router.get('/', (req, res) => {
  let activityRef = db.collection("activities");
  activityRef.get().then((querySnapshot) => {
    let activities = [];
    querySnapshot.forEach(document => {
      activities.push(document.data());
    });
    res.json(activities);
  }).catch(error => {
    res.status(500).send(error);
  });
});

module.exports = router;
