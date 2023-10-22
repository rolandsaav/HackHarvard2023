const admin = require("firebase-admin");
var serviceAccount = require("./routes/serviceAccountKey.json");

// Initialize Firebase only if it hasn't been initialized yet
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

module.exports = {
  admin,
  db
}
