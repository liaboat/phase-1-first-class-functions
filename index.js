function lia(mike, mccrae) {
    console.log(mike + mccrae);
    lia(love)
}
function receivesAFunction(callback) {
    callback(arguments);
}
let mike = 'good';
let mccrae = 'okay';

function returnsANamedFunction() {
    return lia;
}

function returnsAnAnonymousFunction(x){
    return function(y){
        return x+y
    }
}