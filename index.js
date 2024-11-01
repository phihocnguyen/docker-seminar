const express = require('express');
const sequelize = require('./db.config');
const { QueryTypes } = require('sequelize');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.get('/customers', async (req, res) => {
    const users = await sequelize.query('SELECT * FROM Customer', {
        type: QueryTypes.SELECT
    });
    res.status(200).json(users)
});

app.listen(port, () => {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
    });
  console.log(`Example app listening at http://localhost:${port}`);
});