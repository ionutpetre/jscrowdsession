'use strict';

let Cloudant = require('cloudant');

const DB_CREDENTIALS = require('./dbCredentials');

exports.getDb = () => {
    let VCAP_SERVICES = process.env.VCAP_SERVICES ?
        process.env.VCAP_SERVICES : DB_CREDENTIALS.CLOUDANT;
    const DB_URL = VCAP_SERVICES[0].credentials.url,
        DB_NAME = DB_CREDENTIALS.DB_NAME;
    return Cloudant(DB_URL).use(DB_NAME);
}