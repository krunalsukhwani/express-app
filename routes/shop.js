const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('GET - Default');
    res.send('<h1>Welcome to my application.</h1>');
});

module.exports = router;