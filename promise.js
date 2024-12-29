// Promise — це об'єкт, який представляє результат асинхронної операції: успішний (resolved) або невдалий (rejected).

// Читання файлу з використанням Promise

const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then(data => {
        console.log('Вміст файлу:', data);
    })
    .catch(err => {
        console.error('Помилка:', err);
    });

// Композиція Promise

fs.readFile('file1.txt', 'utf8')
    .then(data1 => {
        console.log('Вміст file1:', data1);
        return fs.readFile('file2.txt', 'utf8'); // Повертаємо обіцянку
    })
    .then(data2 => {
        console.log('Вміст file2:', data2);
    })
    .catch(err => {
        console.error('Помилка:', err);
    });

// Async/Await — це синтаксична обгортка над Promise, яка дозволяє писати асинхронний код у вигляді синхронного.

async function readFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        console.log('Вміст file1:', data1);

        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log('Вміст file2:', data2);
    } catch (err) {
        console.error('Помилка:', err);
    }
}

readFiles();