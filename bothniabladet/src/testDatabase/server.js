import bodyParser from "express";


require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
import mongoose from 'mongoose';
import res from "express/lib/response";
const Tip = require('../models/testModel')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
// mongoose.connect("mongodb+srv://adamj:qKEyyVe6kdEQoaQd@dundercluster.m1isx5z.mongodb.net/?retryWrites=true&w=majority")

app.use(express.urlencoded({extended: false}));
app.use(express.json())

const tipRouter = require('./routes/tip')
app.use('bothniabladet/src/pages/tipModel.js', tipRouter)

app.get("/tip", function (req,res){
    res.sendFile(__dirname + "./pages/tipModel.js")
});

app.post("/tip", function (req,res){
    const tip = new Tip({
        description: req.body.descrTip,
        keyword: req.body.keywordTip,
        email: req.body.emailTip,
        firstname: req.body.firstnameTip,
        lastname: req.body.lastnameTip
    });
    Tip.save();
})
app.listen(3000, () => console.log('Server Started'))


// const { MongoClient } = require('mongodb');
// const {body} = require("express/lib/request");
//
// async function main() {
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/drivers/node/ for more details
//      */
//     const uri = "mongodb+srv://adamj:qKEyyVe6kdEQoaQd@dundercluster.m1isx5z.mongodb.net/?retryWrites=true&w=majority";
//
//     /**
//      * The Mongo Client you will use to interact with your database
//      * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
//      * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
//      * pass option { useUnifiedTopology: true } to the MongoClient constructor.
//      * const client =  new MongoClient(uri, {useUnifiedTopology: true})
//      */
//     const client = new MongoClient(uri);
//
//     export async function createConnection(req, res) {
//
//         try {
//             // Connect to the MongoDB cluster
//             await client.connect();
//
//             // Make the appropriate DB calls
//             async function post(req, res) {
//                 await createTip(client, {
//                     description: req.body.descrTip,
//                     keyword: req.body.keywordTip,
//                     email: req.body.emailTip,
//                     firstname: req.body.firstnameTip,
//                     lastname: req.body.lastnameTip
//                 });
//             }
//
//         } finally {
//             // Close the connection to the MongoDB cluster
//             await client.close();
//         }
//     }
// }
//
// main().catch(console.error);
// //
// // // Add functions that make DB calls here
// //
// async function createTip(client, newTip){
//     const result = await client.db("ltu").collection("tip").insertOne(newTip);
//     console.log(`New tip created with the following id: ${result.insertedId}`);
// }
// //
// async function findOneTipByEmail(client, emailTip) {
//     const result = await client.db("ltu").collection("tip").findOne({ email: emailTip });
//
//     if (result) {
//         console.log(`Found a listing in the collection with the email '${emailTip}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the email '${emailTip}'`);
//     }
// }

