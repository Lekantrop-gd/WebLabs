const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.end('Hello, World!\n');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
