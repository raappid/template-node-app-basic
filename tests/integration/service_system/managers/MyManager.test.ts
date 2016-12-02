

import {myManager} from "../../../../src/service_system/index";

describe('MyManager Integration Test cases', () => {

    describe("sayHello",()=>{

        it("should resolve with hello and hi",(done)=>{

            myManager.sayHello().then((result)=>{

                expect(result).toEqual("hello hi");
                done();
            })

        });

    });
});