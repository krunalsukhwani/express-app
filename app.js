const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product',(req, res, next) => {
    console.log('add-product');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product',(req, res, next) => {
    console.log(req.body);
    //res.send('<h1>Produce has been added successfully');
    res.redirect('/');
});

app.get('/',(req, res, next) => {
    console.log('GET - Default');
    res.send('<h1>Welcome to my application.</h1>');
});


app.listen(3000);