'use strict';

function get(req, res) {
   
    res.send('Hello Openshift :'+req.url);
           
}



module.exports = {
    get: get
   
}
