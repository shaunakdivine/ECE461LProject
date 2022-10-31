const express = require('express');
const cors = require('cors');
const path = require("path");
const morgan = require('morgan');
const accountRouter = require('./routes/account');

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routers
app.use('/api/account', accountRouter);

// default pages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

//This is the port number below (David Gross)
app.listen(80, () => {
    console.log("Server Started");
});

