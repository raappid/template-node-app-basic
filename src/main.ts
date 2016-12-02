

import {EventConstants, Actions} from "./service_system/constants";

import {myStore, myManager} from "./service_system/index";
//subscribing to an event

myStore.addListener(EventConstants.MyStore.HI_HELLO,(result)=>{
    console.log("My Store data updated: " + result)
});

//performing an action
myManager.sayHello();



