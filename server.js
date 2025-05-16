const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const USERS_FILE = path.join(__dirname, 'users.json');
const REQUESTS_FILE = path.join(__dirname, 'requests.json');
const JWT_SECRET = 'твой_секретный_ключ_замени_на_сложный_строковый_пароль';

// Мидлвары
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Утилиты для работы с файлами JSON
function readJSON(file) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file));
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Регистрация
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).send('Заполните все поля');

  const users = readJSON(USERS_FILE);
  if (users.find(u => u.email === email)) {
    return res.status(400).send('Пользователь с таким email уже существует');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), name, email, password: hashedPassword });
  writeJSON(USERS_FILE, users);

  res.status(201).send('Регистрация прошла успешно');
});

// Вход
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send('Заполните все поля');

  const users = readJSON(USERS_FILE);
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).send('Неверный email или пароль');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send('Неверный email или пароль');

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Отправка заявки
app.post('/api/request', (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) return res.status(400).send('Заполните все поля');

  const requests = readJSON(REQUESTS_FILE);
  requests.push({ id: Date.now(), name, email, course, date: new Date().toISOString() });
  writeJSON(REQUESTS_FILE, requests);

  res.status(201).send('Заявка отправлена');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
