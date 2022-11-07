const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const accountRouter = require('./routes/account');
const projectRouter = require('./routes/project');
const hardwareRouter = require('./routes/hardware');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routers
app.use('/api/account', accountRouter);
app.use('/api/project', projectRouter);
app.use('/api/hwset', hardwareRouter)

//This is the port number below (David Gross)
app.listen(5000, () => {
    console.log("Server Started");
});

