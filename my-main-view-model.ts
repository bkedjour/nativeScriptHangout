import {Observable} from "data/observable"

export class MainViewModel extends Observable{
    
    private _counter : number;
    
    message: string;
    
    /**
     *
     */
    constructor() {
        super();
        
        this._counter = 10;
        this.message = this._counter + " tap left";
    }
    
    tapAction(){
        this._counter--;
        this.set("message", this._counter + " tap left");
        console.log(this.message);
    }
}

export var mainViewModel = new MainViewModel();