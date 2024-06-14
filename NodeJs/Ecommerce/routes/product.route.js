const express = require('express');
const router = express.Router();
const Product = require('../module/product.model.js');

router.post('/products', async (req, res)=> {
    
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    }
    catch (err) {
        res.status(400).send({
            message: err.message || "Some error occurred while creating the product."
        });
    }
}),

router.get('/products',async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    }
});

router.put('/products/:id',async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    }
});

router.delete('/products/:id',async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).send(product);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    }
});


module.exports = router;



