'use strict';

var os = require('os');

function get(req, res) {
   
    res.send('Hello Openshift from - >'+os.hostname());
           
}



module.exports = {
    get: get
   
}
