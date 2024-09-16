const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

const loginform = require('./controls/loginform');
const active = require('./controls/activeStatus');
const logout = require('./controls/logout');
const register = require('./controls/register');

global.activeStatus = false;

app.post('/api/send-data', loginform)

app.get('/api/status', active)

app.post('/api/logout', logout)

app.post('/api/register', register )



app.listen(5000);
