var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const { QuerySnapshot } = require("@google-cloud/firestore");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get Firestore database instance
const db = admin.firestore();

// Reference to 'activities' collection and sort it by 'createdAt' in descending order
let activityRef = db.collection("activities")

// Fetch and log the sorted activities
activityRef.get().then((querySnapshot) => {
  querySnapshot.forEach(document => {
    console.log(document.data());
  });
});
