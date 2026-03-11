    function tinhchuvi(length, width, callback) {
        const chuvi = 2 * (length + width);
        callback(chuvi);
    }
    function dientich(length, width, callback) {
        const dientich = length * width;
        callback(dientich);
    }
    function hienthichuvi(chuvi) {
        document.getElementById('hienthichuvi').innerText = 'Chu vi: ' + chuvi;
    }
    function hienthidientich(dientich) {
        document.getElementById('hienthidientich').innerText = 'Diện tích: ' + dientich;
    }

    function tinhtoan() {
        const length = parseFloat(document.getElementById('chieudai').value);
        const width = parseFloat(document.getElementById('chieurong').value);
        tinhchuvi(length, width, hienthichuvi);
        dientich(length, width, hienthidientich);
    }