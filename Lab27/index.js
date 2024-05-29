const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://Nazar:idk@market.02nyenh.mongodb.net/';
const path = require('path');
const app = express();
const PORT = 3000;
let products = [];

mongoose.connect(mongoURL);

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
    
    fs.appendFile('requests.log', log, err => {
        if (err) {
            console.error('Error writing to log file', err);
        }
    });

    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/product/list', (req, res) => {
    res.json(products);
});

app.post('/product/create', (req, res) => {
    const { title, description, price, discountPercentage, stock, brand, category, thumbnail } = req.body;
    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        discountPercentage,
        stock,
        brand,
        category,
        thumbnail
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { price } = req.body;
    const product = products.find(p => p.id === parseInt(id));
    
    if (product) {
        product.price = price;
        res.json(product);
    } 
    else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.delete('/product/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== parseInt(id));
    res.json({ message: 'Product deleted' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});