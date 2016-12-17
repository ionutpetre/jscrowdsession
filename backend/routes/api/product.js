'use strict';

let router = require('express').Router(),
    productDao = require('./../services/product/productDao');

router.post('/', (req, res) => {
    const product = req.body;
    productDao.createProduct(product).then(product => {
        res.status(200).send(product);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

router.get('/', (req, res) => {
    productDao.getAllProducts().then(products => {
        res.status(200).send(products);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

router.get('/:productId', (req, res) => {
    const productId = req.params.productId;
    productDao.getProductById(productId).then(product => {
        res.status(200).send(product);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

module.exports = router;
