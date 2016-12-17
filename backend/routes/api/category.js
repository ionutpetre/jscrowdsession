'use strict';

let router = require('express').Router(),
    categoryDao = require('./../services/category/categoryDao');

router.post('/', (req, res) => {
    const category = req.body;
    categoryDao.createCategory(category).then(category => {
        res.status(200).send(category);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

router.get('/', (req, res) => {
    categoryDao.getAllCategories().then(categories => {
        res.status(200).send(categories);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

router.get('/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    categoryDao.getCategoryById(categoryId).then(category => {
        res.status(200).send(category);
    }).catch(err => {
        res.status(400).send({ statusCode: err.statusCode, message: err.description });
    });
});

module.exports = router;
