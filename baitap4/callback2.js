function A(callback) {
    const kq = 5+6;
    callback(kq);
}
function B(kq) {
    console.log('result: '+kq);
}
A(B);