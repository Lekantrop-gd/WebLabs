const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://holodiuknazar2:P5Tqp1GLtbB0qqa8@blackfoxestate.lis2ckg.mongodb.net/';
// const roomRoutes = require('./routes/room-routes');
// const loginRoutes = require('./routes/login-routes');
// const logger = require('./middleware/logger');
const path = require('path');
const app = express();
const PORT = 3000;

mongoose.connect(mongoURL);
// app.use(express.static('public'));
app.use(express.json());
// app.use(logger);
// app.use('/room', productRoutes);
// app.use('/login', loginRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});