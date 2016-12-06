
var util = require('./util');

util.series(["ts-node node_modules/.bin/istanbul cover -e .ts  -x \"*.d.ts\" -x \"*.spec.ts\" -x \"*.test.ts\" node_modules/mocha/bin/_mocha --require tests/helpers/chai-sinon.ts tests/**/*.test.ts tests/**/*.spec.ts --recursive"], function(err){

    if(err)
    {
        console.log(err);
        process.exit(1);
    }

    process.exit(0);
});

