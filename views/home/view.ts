import viewModel = require("./viewModel");
import listViewModel = require("ui/list-view");
import frameModule = require("ui/frame");

export function pageLoaded(args){
   args.object.bindingContext = viewModel.viewModel;
}

export function itemTap(args : listViewModel.ItemEventData){
    var selectedItem = args.view.bindingContext;
    
    frameModule.topmost().navigate({moduleName:"views/details/view", context:selectedItem, animated:true});
}