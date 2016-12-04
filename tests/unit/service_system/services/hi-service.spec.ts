
import hiService = require("../../../../src/service_system/services/hi-service")

describe('hi-service Specs', () => {

    describe("sayHi",()=>{


        it("should resolve with hi",function(done){

            var logSpy = this.sinon.spy(console,"log");

            hiService.sayHi().then((result)=>{

                expect(result).to.equal("hi");
                expect(logSpy.calledWith("hi-service saying hi...")).to.equal(true);
                done();
            });
        });

    });
});