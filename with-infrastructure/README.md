# Login Project with Server

## 📁 Структура

- `index.html` — форма авторизации
- `style.css` — стили
- `script.js` — логика отправки данных на сервер
- `server.js` — простой сервер на Express
- `package.json` — генерируется при `npm init`

## 🚀 Как запустить

1. Установи Node.js и NPM
2. Открой терминал:
    ```
    cd with-infrastructure
    npm init -y
    npm install express body-parser cors
    node server.js
    ```
3. Открой `index.html` в браузере

## ✅ Тестовые данные

- Email: `admin@example.com`
- Пароль: `1234`

## 🧩 Особенности

- Валидация на сервере
- Простая проверка логина/пароля
- Обработка fetch-запроса с JSON
- CORS настроен
