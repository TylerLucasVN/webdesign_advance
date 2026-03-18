const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware để đọc dữ liệu từ form HTML và JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Import routes
const squareRoutes = require('./routes/squareRoutes');
app.use('/', squareRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server dang chay tai: http://localhost:${PORT}`);
});