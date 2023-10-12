const express = require('express');
const app = express();

// Создание пользователя
app.post('/users', (req, res) => {
  // Обработка запроса и сохранение данных в базе данных
  // ...
  res.status(201).send('User created successfully');
});

// Изменение пользователя
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Обработка запроса и обновление данных пользователя в базе данных
  // ...
  res.send('User updated successfully');
});

// Получение списка пользователей
app.get('/users', (req, res) => {
  // Обработка запроса и получение списка пользователей из базы данных
  // ...
  res.send('List of users');
});

app.listen(3000, () => {
  console.log('User service is running on port 3000');
});