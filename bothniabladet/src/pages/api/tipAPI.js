import bodyParser from "express";

const express = require('express');

var parseUrl = require('body-parser');

const sessions = require('express-session');
const app = express();
const route = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let encodeUrl = parseUrl.urlencoded({ extended: false });

const uri = "mongodb+srv://adamj:qKEyyVe6kdEQoaQd@dundercluster.m1isx5z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(sessions({
    secret: "thisismysecrctekey",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
    resave: false
}));


import conf from "eslint-config-next";
import mongoose, {connect} from "mongoose";
import {MongoClient} from "mongodb"; // MongoDB ORM
connect(conf.db[conf.env], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(() => console.log(`connected to ${conf.db[conf.env]}`))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/tipModel.js');
})

var mongoose= require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3000/tip");

var tip = new mongoose.Schema({
    descr: String,
    keyword: String,
    email: String,
    firstName: String,
    lastName: String
});
var Tip = mongoose.model("tip", tip);



route.post('/tip', encodeUrl, async (req, res) => {
    var myData = new Tip(req.body);

    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

    // try {
    //     // Connect to the MongoDB cluster
    //     await client.connect();
    //
    //     // Make the appropriate DB calls
    //
    //     await createTip(client, {descr, keywords, email, firstname, lastname});
    //
    // } finally {
    //     // Close the connection to the MongoDB cluster
    //     await client.close();
    // }


});

app.listen(4000, ()=>{
    console.log("Server running on port" + port);
});

// async function createTip(client, newTip){
//     const result = await client.db("ltu").collection("tip").insertOne(newTip);
//     console.log(`New tip created with the following id: ${result.insertedId}`);
// }