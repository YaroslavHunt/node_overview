const fs = require('fs');

// Асинхронне читання файлу
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка під час читання файлу:', err);
        return;
    }
    console.log('Вміст файлу:', data);
});

//Запис у файл
const content = 'Це текст для запису у файл.';

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Помилка під час запису у файл:', err);
        return;
    }
    console.log('Файл успішно записаний!');
});

//Перевірка чи існує файл
fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('Файл не існує');
    } else {
        console.log('Файл існує');
    }
});
