const express = require('express');
const app = express();

// Middleware для парсингу JSON
app.use(express.json());

// "База даних" у пам'яті
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// 1. Отримати всіх користувачів
app.get('/users', (req, res) => {
    res.json(users);
});

// 2. Отримати користувача за ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Користувач не знайдений' });
    }
    res.json(user);
});

// 3. Додати нового користувача
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    // Перевірка на відсутність обов'язкових полів
    if (!name || !email) {
        return res.status(400).json({ message: 'Потрібно вказати name і email' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 4. Оновити користувача
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Користувач не знайдений' });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

// 5. Видалити користувача
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Користувач не знайдений' });
    }

    users.splice(userIndex, 1);
    res.status(204).send(); // Успішне видалення, без контенту
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
