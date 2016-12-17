'use strict';

let dbConnection = require('./dbConnection');
let db = dbConnection.getDb();

function createDoc(doc) {
    return new Promise((resolve, reject) => {
        db.insert(doc, (err, body) => {
            if (err) {
                reject(err);
            } else {
                db.get(body.id, { revs_info: false }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
}

function getDocById(docId) {
    return new Promise((resolve, reject) => {
        db.get(docId, (err, doc) => {
            if (err) {
                reject(err);
            } else {
                resolve(doc);
            }
        });
    });
}

function getAllDocs(viewGroup, viewName) {
    return new Promise((resolve, reject) => {
        db.view(viewGroup, viewName, {}, (err, body) => {
            if (err) {
                reject(err);
            } else {
                let docs = body.rows.map(row => {
                    return row.value;
                });
                resolve(docs);
            }
        });
    });
}

module.exports = { createDoc, getDocById, getAllDocs };