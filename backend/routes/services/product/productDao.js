'use strict';

let dbService = require('./../database/db');

const PRODUCT_VIEW_GROUP = 'productViews',
    GET_ALL_PRODUCTS_VIEW = 'getAllProducts';

function createProduct(product) {
    product.docType = 'product';
    return new Promise((resolve, reject) => {
        dbService.createDoc(product).then((product) => {
            resolve(product);
        }).catch(err => {
            reject(err);
        });
    });
}

function getAllProducts() {
    return new Promise((resolve, reject) => {
        dbService.getAllDocs(
            PRODUCT_VIEW_GROUP, GET_ALL_PRODUCTS_VIEW).then((products) => {
                resolve(products);
            }).catch(err => {
                reject(err);
            });
    });
}

function getProductById(productId) {
    return new Promise((resolve, reject) => {
        dbService.getDocById(productId).then((product) => {
            resolve(product);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = { createProduct, getAllProducts, getProductById };
