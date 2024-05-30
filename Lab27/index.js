const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://Nazar:idk@market.02nyenh.mongodb.net/';
const productRoutes = require('./routes/product-routes');
const authRoutes = require('./routes/user-routes');
const logger = require('./middleware/logger');
const path = require('path');
const app = express();
const PORT = 3000;

mongoose.connect(mongoURL);
app.use(express.static('public'));
app.use(express.json());
app.use(logger);
app.use('/product', productRoutes);
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});