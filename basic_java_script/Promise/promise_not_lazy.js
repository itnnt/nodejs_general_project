console.log('before')
const promise = new Promise(function fn(resolve, reject) {
  console.log('hello')
  // ...
});
console.log('after')

/**
 * 
 */
console.log("-----------------------------------")
console.log('before')
const fun = () => new Promise(function fn(resolve, reject) {
  console.log('hello')
  // ...
});
console.log('after')
fun()