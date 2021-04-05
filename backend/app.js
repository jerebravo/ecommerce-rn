const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;

// Middleware
app.use(bodyParser.json())
app.use(morgan('tiny'));

/*
app.get(`${api}/products`, (req, res) => {
    const products = {
        id: 1,
        name: 'product one',
        img: 'img_product_one'
    }
    res.send(products)
})
*/

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommercern-database'
})
.then(()=>{
    console.log('The database connect is ready to use.');
})
.catch((err) => {
    console.log('Error in connect database: ',err); 
});

app.listen(3333, () => {
    console.log('API', api)
    console.log('The server is running in localhost:3333')
})