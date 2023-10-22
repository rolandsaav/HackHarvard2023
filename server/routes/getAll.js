/*const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");*/
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
const { QuerySnapshot } = require("@google-cloud/firestore");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
  
const db = admin.firestore();

let userRef = db.collection("users")

userRef.get().then((QuerySnapshot)=> {
  QuerySnapshot.forEach(document => {
    console.log(document.data());
  })
})


/* The app is a software that acts like tinder, allowing people to swipe left/right on 
    events that they are interested in attending, as well as allow them to post events to 
    see if anyone nearby is interested in participating in such activities.

the goal is to create a users router that, when called, return the users data, including:
email
phone number
events interested in
name
username
module.exports = router
all from a database
we will use firebase authentication
*/