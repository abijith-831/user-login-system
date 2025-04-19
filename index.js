const mongoose = require("mongoose");
mongoose.connect("mongodb://username:password@cluster0-shard-00-00.os4ca.mongodb.net:27017,cluster0-shard-00-01.os4ca.mongodb.net:27017,cluster0-shard-00-02.os4ca.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority");
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