/**
 * Được giới thiệu trong ES8, async/await là một cơ chế 
 * giúp bạn thực hiện các thao tác bất đồng bộ một cách tuần tự hơn. 
 * Async/await vẫn sử dụng Promise ở bên dưới 
 * nhưng mã nguồn của bạn (theo một cách nào đó) sẽ trong sáng và dễ theo dõi.

Để sử dụng, bạn phải khai báo hàm với từ khóa async. Khi đó bên trong hàm bạn có thể dùng await.
Cần lưu ý là kết quả trả về của async function luôn là một Promise.
 */
function square(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(x, 2));
        }, 2000);
    });
}

async function layer(x) {
    const value = await square(x);
    console.log(value);
}

layer(10);