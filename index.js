function receivesAFunction(callback){
    callback();
}

const returnsANamedFunction = () => {
    const sum = (a, b) => a+b;
    return sum;
}

function returnsAnAnonymousFunction(){
    return function(){
        alert("hi");
    }
}
returnsAnAnonymousFunction();