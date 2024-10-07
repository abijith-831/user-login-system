const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://abhijith:12345@user-login-system.os4ca.mongodb.net/?retryWrites=true&w=majority&appName=user-login-system");
const express = require("express");
const nocache = require('nocache');
const app = express();
app.use(nocache());

//FOR USER ROUTES
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

//FOR ADMIN ROUTES
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    console.log("Server is running on http://localhost:3000/admin");
});