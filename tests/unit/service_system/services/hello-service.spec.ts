
import helloService = require("../../../../src/service_system/services/hello-service");

describe('hello-service Specs', () => {

    describe("sayHello",()=>{

        it("should return hello",function(){

            var logSpy = this.sinon.spy(console,"log");

            var result:string = helloService.sayHello();
            expect(result).to.equal("hello");
            expect(logSpy.calledWith("hello-service saying hello...")).to.equal(true);
        });

    });
});