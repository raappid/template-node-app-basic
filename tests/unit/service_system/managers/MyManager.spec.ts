
import myAssistant = require("../../../../src/service_system/assistants/my-assistant");
import {MyManager} from "../../../../src/service_system/managers/MyManager";

describe('MyManager Specs', () => {

    var myManager:IMyManager;

    beforeEach(()=>{
        myManager = new MyManager();
    });
    describe("sayHello",()=>{

        it("should resolve with hello and hi",function(done){

            this.sinon.stub(myAssistant,"sayHelloAndHi").returns(Promise.resolve("humm"));

            myManager.sayHello().then((result)=>{

                expect(result).to.equal("humm");
                done();
            })

        });

        it("should reject with error, if assistant rejects with error",function(done){

            this.sinon.stub(myAssistant,"sayHelloAndHi").returns(Promise.reject(new Error("yay")));

            myManager.sayHello().then(null,(error)=>{

                expect(error).to.be.instanceof(Error);
                expect(error.message).to.equal("yay");
                done();
            })
        });

    });
});