'use strict';

function Meddelwut() {
    return function meddelwut(req, res, next) {
        console.log(`Request URL: ${req.originalUrl}`);
        next();
    };
}

module.exports = Meddelwut;
