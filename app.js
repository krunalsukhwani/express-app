const express = require('express');
const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('add-product');
    res.send('<h1>The add product page.</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the another middleware - express');
    res.send('<h1>This is my first application.</h1>');
});

app.listen(3000);