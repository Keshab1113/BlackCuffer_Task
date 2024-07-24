require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require("./utils/db.js")
const dataRouter = require("./router/data-router.js")

const app = express();
const corsOptions = {
    origin: process.env.CROSS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true,
}
app.use(cors(corsOptions));
app.use("/api", dataRouter);





const port = process.env.PORT || 8000;
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});