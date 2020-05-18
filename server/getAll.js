//REQUIRE FILES, METHODS ETC
const products = require('../products.json');

//WRITE HANDLER FUNCTIONS
module.exports = {
    getAllProducts: (req, res) => {
        res.status(200).send(products)
    },

    getProductByPrice: (req, res) => {
        const {price_input} = req.params
        const price = products.find(element => element.price === +price_input)

        if(price){
            res.status(200).send(price)
        } else {
            res.status(400).send('Item not found')
        }
    },

    getProductsPriceRange: (req, res) => {
        const {price} = req.query

        if(price){
            const items = products.filter(value => value.price >= parseInt(req.query.price))
            return res.status(200).send(items)
        }
        return res.status(200).send("No item at that price")
    },

    getProduct: (req, res) => {
        const item = products.find(val => val.id === parseInt(req.params.id))
        if(!item){
            return res.status(500).send("Item not found")
        }
        res.status(200).send(item)
    } 
}