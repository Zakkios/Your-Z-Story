const express = require('express');
const cors = require('cors');
const choiceRoutes = require('./routes/choiceRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', choiceRoutes);

module.exports = app;