
var util = require('./util');
process.env.JASMINE_CONFIG_PATH="jasmine.json";


util.series(["ts-node node_modules/.bin/istanbul cover -e .ts scripts/jasmine-ts.js"], function(err){

    if(err)
    {
        console.log(err);
        process.exit(1);
    }

    process.exit(0);
});

