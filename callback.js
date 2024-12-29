// Callback — це функція, яка передається як аргумент іншій функції та викликається після завершення операції.

// Асинхронне читання файлу з callback

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка:', err);
        return;
    }
    console.log('Вміст файлу:', data);
});

// Проблема callback'ів: "Callback Hell"

fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return console.error(err);
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return console.error(err);
        console.log(data1, data2);
    });
});

