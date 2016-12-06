

import {EventConstants} from "./service_system/constants";

import {myStore, myManager} from "./service_system/index";

//Lets require/import the HTTP module
import {IncomingMessage,createServer,ServerResponse} from "http";

import {parse as parseURL,Url} from "url"


//Lets define a port we want to listen to
const PORT= process.env.NODE_ENV == "production"? process.env.PORT:3000;

//We need a function which handles requests and send response
function handleRequest(req:IncomingMessage, res:ServerResponse){

    //subscribing to an event
    myStore.addListener(EventConstants.MyStore.HI_HELLO,handleHiHelloEvent);

    var urlObject:Url = parseURL(req.url);

    if(urlObject.path == "/")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`<!DOCTYPE html>
                    <html lang="en">
                        <head>
                        </head>
                        <body>
                            <a href="/helloworld">Say Hello</a>
                        </body>
                    </html>`);
    }
    else if(urlObject.path == "/helloworld")
    {
        myManager.sayHello();
    }
    else
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Sorry Could not find anything :(');
    }


    function handleHiHelloEvent(result:string):void
    {
        myStore.removeListener(EventConstants.MyStore.HI_HELLO,handleHiHelloEvent);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(result);
    }

}

//Create a server
var server = createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server Started at port", PORT);
});




