/*const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://coders:codersPassword@backend.ahjxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.on("open", () => {
  console.log("Connected to Mongoose");
});
mongoose.connection.on("error", () => {
  console.log("Error while connecting to Mongoose");
});*/

const config = {
  firebase: {
    type: "service_account",
    project_id: "coderhouse-7cddc",
    private_key_id: "2ec04de90f3b65d695425bc7cb925d63ae57f3d1",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCnSWGYfoYiz5t4\nMtCZCwpJn0DOAYwqseUK85guwVfIZegkU3/dg1zYjUMI/52PA61qKEnC+bELZy6a\n18AieHx8MSEcHhrtbNuOpDwGeBthgaMg0MsjXh+sVopR/TUuYtaphpNRnM6VfXwn\nU9tUzgTwXFertwG7CPyssHNs47No3mSIgUIRujAxDM2C+7Y74FgvayS2L+YepFg4\nxvB0vXH4yomWDSrfy4Rv+LCwlETXtnS1QMQ2TDPcBUtK4uDj0FS3FO6/arY6cfBs\nG3lSCj6cROEZHYfWTuQMnpRVWBNi4uHjsSHQRrRqhDE9S6pQi9Rj1G9ZkN4N4M4x\nSi8wHpudAgMBAAECggEAIgy+KDdsnw5J01PogJYuMGERZD0NZi1SdQGzEqU49GnF\nsAss5g4UamGKaPz6eX8in452wRBouGz2n/7VNU7366FmX15DVdtH70c/joOI8zZb\nWVUWW+sPIFl3CwwydHAayGPDfaOgqu3hRPH9HUxX1gK9t45m9EZ2g8HgpKPOQ0RY\ndGc5Ls2PG3xTJFTKADFPu3rkQUGj8vBrAstzmf/Xccfuo6+uKoWRutprjNCXvy0v\nrKtvkdIUbnAu91v0Hhk3r8agY1c0yYxXObBA1HhkAquGFQtDj/SCttYYuTYk3mUP\nCFC1VEr8/F3H3gGWU85qyZX7IRnBy3oHzmXPf5n2EQKBgQDih8Bzsmu90SuFiDYm\nvxTfZ41lSxWpuSPLAEm0Slxc/tU03lz6WM68y5vb5EeRtAJQyqFP/oGkkR8t9ztB\ntl7gyQ31vvOReqUxgpUVo6ewX00paNBxTgqjrN5xvcMUvRkGTSfXlWsoWVAODL6e\n2suKuQ6bD3tK1ioRXlN/CaO6OQKBgQC9DJwe412SM8BWT/ZizSHo+d3Foinwnmp+\nDjsnAh4J8Gw2PWCHsIMzAh4z7vwddAAowWN8mXsVntknHQnSvjlj3fBml+aX8tr2\nDDkRZ5DEqbuRVXtp0UwKMNneiNOarihALkQrnEZ3EyzcCusEba+oJ47SyATEAa8/\nZGumf7W8hQKBgGnSTrX9eFVQ3ErhyaIqCz8dqbDS9Yi2oyDWvpeJUUJkDQdIhRix\n2cnaN7HuHvzSoW5KajbrRnaxEGaxoq3c2s+ZPHs7O58PMxJA1RIpxFEhA/O/Mfhs\nI444WCW8JuCOQZ1u95i/BTLxHfOiQn4E6aahMlB/V/Iqv7YjYU/sGd8JAoGAGb1M\nyFvWkqBfMKFEf6FEW68hhdYVdcBr6WvQm/gK1PmaEix7Jx5eTqScLh/8zZnMp7/k\n5sMS4he1o0Ct5Lano7RFFgLaj5euPk/duUPrjws5EYmc+wRXIRATqdvhS68opcxm\n1bU6Vt4SfocyBnFUuEViicpX88Py82Od0JaUzO0CgYEAxyFGZSK5sJ5uXrUHemfB\ncAX2R/a+Unge9ZCcLNnP01E7CLyeO2R6ZalATXqPu12Y4F9wy4Yxx8VwBIroOl5h\nuzQPd/GFrwMp8oebYeo9S6/c270ucW9MksqEAiRhW91gRQYhLhRf0erHBURx6J92\nQf9ZThXGRTbWoa3fd2ezzX4=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-qiykt@coderhouse-7cddc.iam.gserviceaccount.com",
    client_id: "101803381590336118652",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qiykt%40coderhouse-7cddc.iam.gserviceaccount.com",
  },
};

module.exports = config;
