'use strict';

function get(req, res) {
   
    res.send('Hello Openshift');
           
}



module.exports = {
    get: get
   
}
