const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");
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