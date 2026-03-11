function dosomething(callback) {
    console.log("Doing something...");
    callback();
}  
function callbackFunction() {
    console.log("Callback function executed.");
}
dosomething(callbackFunction);