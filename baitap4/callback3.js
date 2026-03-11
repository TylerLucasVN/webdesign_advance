function tinhchuvi(length, width, callback) {
    const chuvi = 2 * (length + width);
    callback(chuvi);
}
function dientich(length, width, callback) {
    const dientich = length * width;
    callback(dientich);
}
function hienthichuvi(chuvi) {
    console.log('Chu vi: ' + chuvi);
}
function hienthidientich(dientich) {
    console.log('Diện tích: ' + dientich);
}
const length = 5;
const width = 10;
tinhchuvi(length, width, hienthichuvi);
dientich(length, width, hienthidientich);