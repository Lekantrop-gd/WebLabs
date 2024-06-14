const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const roomRoutes = require('./routes/room-routes');
const loginRoutes = require('./routes/login-routes');
const logger = require('./middleware/logger');
const path = require('path');
const app = express();

mongoose.connect(process.env.MONGODB_URI);
app.use(express.static('../front'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(logger);
app.use('/room', roomRoutes);
app.use('/login', loginRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});