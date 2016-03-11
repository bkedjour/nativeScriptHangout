export function navigatedTo(args){
    var page = args.object;
    page.bindingContext = page.navigationContext;
}