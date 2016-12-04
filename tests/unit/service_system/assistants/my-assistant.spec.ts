
import helloService = require("../../../../src/service_system/services/hello-service");
import hiService = require("../../../../src/service_system/services/hi-service");
import myAssistant = require("../../../../src/service_system/assistants/my-assistant");


describe('my-assistant Specs', () => {

    describe("sayHelloAndHi",()=>{


        it("should resolve with hello and hi",function (done){
            var helloStub = this.sinon.stub(helloService,"sayHello").returns("helloStub");
            var hiStub = this.sinon.stub(hiService,"sayHi").returns(Promise.resolve("hiStub"));

            myAssistant.sayHelloAndHi().then((result)=>{

                expect(result).to.equal("helloStub hiStub");
                done();
            })

        });

        it("should reject with error, if hi service rejected with error",function(done){

            this.sinon.stub(hiService,"sayHi").returns(Promise.reject(new Error("yay")));

            myAssistant.sayHelloAndHi().then(null,(error)=>{

                expect(error).to.be.instanceof(Error);
                expect(error.message).to.equal("yay");
                done();
            })
        });

    });
});