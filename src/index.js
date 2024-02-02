const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
const db = require('./models/index');

const setupAndServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`server started at ${PORT}`);

        /*    if (process.env.SYNC_DB) {
                db.sequelize.sync({ alter: true });
            }
        */

    });
}

setupAndServer();


//for creating a flight or getting details of flights use localhost:3000/api/v1/flight via POST or GET request in postman
