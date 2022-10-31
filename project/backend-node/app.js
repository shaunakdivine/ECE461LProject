const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const accountRouter = require('./routes/account');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routers
app.use('/api/account', accountRouter);

//This is the port number below (David Gross)
app.listen(5001, () => {
    console.log("Server Started");
});

