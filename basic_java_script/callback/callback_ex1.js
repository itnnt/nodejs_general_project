const request = require('request');
let result;
request('https://www.google.com/', function (error, response, body) {
    if(error){
        // Handle error.
    }
    else {
        result = body;
        // console.log(result);
    }
});
/**
 * The last line will output “undefined” to the console because at the time that line is being executed, 
 * the callback has not been called. 
 * Even if the request were somehow to complete before the result variable 
 * is printed to the console (highly unlikely though), this code will still run to completion 
 * before the callback is executed anyway 
 * because that is the nature of the non-blocking I/O model in JavaScript.
 */
console.log(result);