import {Msp} from "../../shared/msp";

export class HomeViewModel{
    /**
     *
     */
    constructor() {
        this._items = [];
        for (var index = 0; index < 10; index++) {
            this._items.push({firstName: "firstName " + index, lastName: "lastName " + index, 
            email: "email@studentpartner.com", 
             image: "~/images/person.png"});
        }
    }
    
    private _items : Msp[];
    
    public get items() : Msp[] {
        return this._items;
    }
}

export var viewModel = new HomeViewModel();