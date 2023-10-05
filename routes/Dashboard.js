const dashRt = require('express').Router();

dashRt.get('/', (req, res) => {
    console.log('Nice job')
    res.status(200)
});

module.exports = dashRt;