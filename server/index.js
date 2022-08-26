import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import post file you created in routes
import postRoutes from './routes/post.js'

// import express from 'express'  is same as const express = reuire('express')
// to enable import syntax go to pacakge.json to add "type":"module" under "main": "index.js" change test to start
const app = express();

// use  express midlewear to tie routes to our application
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//  now we connect to mongoBD https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  "mongodb+srv://moekabba:12345Mongo@cluster0.ywcoa4x.mongodb.net/?retryWrites=true&w=majority";
//  remember to hide this string in .env or som
// port then set to 5000 for now
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, {  useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.error(error.message));

// mongoose.set("useFindAndModify", false); => no logner require
