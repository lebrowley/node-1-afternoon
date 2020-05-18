//REQUIRE DEPENDENCIES
const express = require('express');

//DECLARE APP VARIABLE
const app = express();

//DECLARE SERVER PORT AND LISTEN METHOD
const SERVER_PORT = 4001;
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));

//REQUIRE OTHER FILES, METHODS ETC
const products = require('../products.json');
const getProducts = require('../server/getProducts');
const getProduct = require('../server/getProduct');


//WRITE ENDPOINTS

app.get('/api/products', getProducts)

app.get('api/products', getProduct)







// const getAll = require('../server/getAll');

//A BIT MORE PRACTICE I CREATED FOR MYSELF

// app.get('/api/products', getAll.getAllProducts)

// app.get('/api/products/:price_input', getAll.getProductByPrice)

// app.get('/api/products', getAll.getProductsPriceRange)

// // app.get('/api/product/:id', getAll.getProduct)



