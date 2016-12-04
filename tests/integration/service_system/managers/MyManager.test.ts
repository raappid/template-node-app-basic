

import {myManager} from "../../../../src/service_system/index";

import Chai = require("chai");
var expect = Chai.expect;

describe('MyManager Integration Test cases', () => {

    describe("sayHello",()=>{

        it("should resolve with hello and hi",function (done) {

            myManager.sayHello().then((result)=>{

                expect(result).to.equal("hello hi");
                done();
            })

        });

    });
});