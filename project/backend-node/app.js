const express = require('express');
const cors = require('cors');
const path = require("path");
const morgan = require('morgan');
const accountRouter = require('./routes/account');
const projectRouter = require('./routes/project');
const hardwareRouter = require('./routes/hardware');

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routers
app.use('/api/account', accountRouter);
app.use('/api/project', projectRouter);
app.use('/api/hwset', hardwareRouter)

// default pages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});

//This is the port number below (David Gross)
app.listen(5001, () => {
    console.log("Server Started");
});