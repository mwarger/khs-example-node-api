'use strict';

function get(req, res) {
   
    res.send('Hello Openshift :'+req.originalUrl);
           
}



module.exports = {
    get: get
   
}
