const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const dashRt = require('./routes/Dashboard.js');

app.use(express.static('public'));
app.use('/dashboard', dashRt);

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dashboard.html'))
});

app.listen(PORT, () => {
    console.log('App listening on port 3001.')
});