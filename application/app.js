"use strict";

// Import express library.
const express = require("express");

// Create express application.
var app = express();

// Add static files location
app.use(express.static("static"));

// Add /students endpoing
app.get("/students", function(req, res) {
    res.send("Hello world!");
});

// Start listening on port 3000
app.listen(3000, function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Server started.");
});