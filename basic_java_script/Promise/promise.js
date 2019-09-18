// server.js
/**
 * 
 * @param {*} x 
 * So, here after 5 seconds, we can see the square of 10. 
 * Function square returns the promise, and after resolving that promise, we get our squared data.
 */
function square(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 5000);
    });
}

square(10).then(data => {
    console.log(data);
});

/**
 * Tạo nhanh Promise với Promise.resolve() và Promise.reject()
Có những trường hợp bạn chỉ cần bọc một giá trị vào promise hay tự động reject. 
Thay vì dùng cú pháp new Promise() dài dòng, 
bạn có thể dùng hai phương thức tĩnh Promise.resolve(result) và Promise.reject(err)
 */
const p = Promise.resolve(12)
    .then(result => console.log(result)) // 12
    .then(res => Promise.reject(new Error('Dừng lại nhanh')))
    .then(() => 'Cười thêm phát nữa là tym anh đứt phanh')
    .catch(err => console.error(err)) // Error: Dừng lại nhanh