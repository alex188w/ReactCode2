import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetails from './componentns/ArticleDetails';
import ArticleList from './componentns/ArticleList';

function App() {
  const articles = [
    { id: 1, title: 'товар 1', content: 'Описание товара 1' },
    { id: 2, title: 'товар 2', content: 'Описание товара 2' },
    { id: 3, title: 'товар 3', content: 'Описание товара 3' },
    { id: 4, title: 'товар 4', content: 'Описание товара 4' },
  ];

  return (
    <div className="App">
      <Router>
        <div>
          <h2>Задание 4 Приложение для просмотра товаров</h2>
          <Routes>
            <Route path="/articles/:id" element={<ArticleDetails articles={articles} />} />
            <Route path="/" element={<ArticleList articles={articles} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
