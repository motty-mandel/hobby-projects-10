const express = require('express');
const PATH = require('path');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('App listening on port 3001.')
});