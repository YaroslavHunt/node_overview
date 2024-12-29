const http = require('http');

// Створення сервера
const server = http.createServer((req, res) => {
    // Встановлення заголовків відповіді
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //application/json для req.body(JSON)

    // Перевірка URL запиту
    if (req.url === '/') {
        res.end('Привіт! Це головна сторінка.');
    } else if (req.url === '/about') {
        res.end('Це сторінка "Про нас".');
    } else {
        res.writeHead(404);
        res.end('Сторінка не знайдена.');
    }
});

// Сервер слухає порт 3000
server.listen(3000, () => {
    console.log('Сервер запущено на http://localhost:3000');
});

//Приклад: Відправка HTML-відповіді
const server1 = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.end('<h1>Головна сторінка</h1><p>Вітаємо на нашому сайті!</p>');
    } else if (req.url === '/contact') {
        res.end('<h1>Контакти</h1><p>Напишіть нам!</p>');
    } else {
        res.writeHead(404);
        res.end('<h1>404</h1><p>Сторінка не знайдена.</p>');
    }
});

server1.listen(3000, () => {
    console.log('Сервер працює на http://localhost:3000');
});