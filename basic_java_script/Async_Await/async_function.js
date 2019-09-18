// Async Function
/**
 * 
Async function declarations return an async object. These are similar to Generator in the sense that their execution can be paused. 
The only fundamental difference is that they always yield a Promise instead of a  { value: any, done: boolean } object.
 */
/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
async function add(a, b) {
    return a + b;
}