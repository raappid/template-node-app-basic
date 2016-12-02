

import {actionDispatcher} from "../../comm_system/index";
import {EventEmitter} from "events";

export abstract class StoreBase extends EventEmitter implements IStore
{
    protected actionDispatcher:IActionDispatcher = actionDispatcher;
    
    constructor(){
        super();
        this.registerHandlers();
    }
    
    protected abstract registerHandlers():void;
    
    protected registerAction(actionName:string, handler:(...args:any[])=>any):void
    {
        this.actionDispatcher.registerAction(actionName,handler,this);
    }
}