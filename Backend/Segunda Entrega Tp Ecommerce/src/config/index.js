const config = require("../configs");
const admin = require("firebase-admin");
const serviceAccount = config.firebase;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
