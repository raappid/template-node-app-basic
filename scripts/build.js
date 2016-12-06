

var util = require('./util');
var cpy = require("cpy");

var isProductionBuild = process.env.NODE_ENV == "production";

build(isProductionBuild);

function build(isRelease){

    var cmd = "tsc";

    if(!isRelease)
        cmd= cmd + " --sourceMap";


    util.series(["npm run clean",cmd], function (err) {

        if(err)
        {
            console.log(err);
            process.exit(1);
        }
        else
        {

            if(isRelease)
            {
                cpy(["**/*.js"],"../dist",{cwd:process.cwd()+"/src",parents: true, nodir: true}).then(function(){

                    process.exit(0);

                },function(err){

                    console.log(err);
                    process.exit(1);
                })
            }
        }
    });

}

