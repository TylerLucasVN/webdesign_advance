const squareModel = require('../models/square');

// Hiển thị form nhập độ dài cạnh
exports.showForm = (req, res) => {
    res.render('index', { perimeter: null, area: null });
};

// Xử lý tính toán chu vi và diện tích
exports.calculateSquare = async (req, res) => {
    try {
        const sideLength = Number(req.body.sideLength); // Ép kiểu số
        
        if (!sideLength || isNaN(sideLength)) {
            return res.status(400).send("Vui lòng nhập độ dài cạnh hợp lệ!");
        }

        const perimeter = 4 * sideLength;
        const area = sideLength * sideLength;

        await squareModel.saveSquareData(sideLength, perimeter, area);
        
        res.render('index', { perimeter, area });
    } catch (error) {
        console.error('Lỗi DB:', error);
        res.status(500).send('Lỗi Server khi lưu dữ liệu');
    }
};