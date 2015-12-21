

var util = require('./util');

util.exec("npm install",function(error){

    if(error)
    {
        console.log(error);
        process.exit(1);
    }

    process.exit(0);
});