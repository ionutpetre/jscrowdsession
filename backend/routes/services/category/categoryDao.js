'use strict';

let dbService = require('./../database/db');

const CATEGORY_VIEW_GROUP = 'categoryViews',
    GET_ALL_CATEGORIES_VIEW = 'getAllCategories';

function createCategory(category) {
    category.docType = 'category';
    return new Promise((resolve, reject) => {
        dbService.createDoc(category).then((category) => {
            resolve(category);
        }).catch(err => {
            reject(err);
        });
    });
}

function getAllCategories() {
    return new Promise((resolve, reject) => {
        dbService.getAllDocs(
            CATEGORY_VIEW_GROUP, GET_ALL_CATEGORIES_VIEW).then((categories) => {
                resolve(categories);
            }).catch(err => {
                reject(err);
            });
    });
}

function getCategoryById(categoryId) {
    return new Promise((resolve, reject) => {
        dbService.getDocById(categoryId).then((category) => {
            resolve(category);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = { createCategory, getAllCategories, getCategoryById };
