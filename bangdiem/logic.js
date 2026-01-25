function logic1() {
    var a = document.getElementById('se1').value;
    a = parseInt(a);
    var b = document.getElementById('se2').value;
    b = parseInt(b);
    var c = document.getElementById('select-year');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    
    var k;
    switch (value) {
        case 1:
            k = (a + (b * 2)) / 3;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
        case 2:
            k = ((a * 2) + (b * 3)) / 5;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
        case 3:
            k = ((a * 3) + (b * 4)) / 7;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
    }

    if (k >= 9) {
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    }
    if (k >= 7 && k < 9) {
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    }
    if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "Hoc sinh Trung binh";
        document.getElementById('display').style.color = "yellow";
    }
}

function logic2() {
    document.getElementById('se1').value = "";
    document.getElementById('se2').value = "";
    // Bạn có thể thêm lệnh xóa kết quả:
    document.getElementById('result').value = "";
    document.getElementById('display').innerHTML = "";
}