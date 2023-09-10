// Импорт файлов React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорт стилей css
// Импорт компонентов страницы
import './index.css';
import App from './App';

// Добавляем карточки товаров на страницу
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);