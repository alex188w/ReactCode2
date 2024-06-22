import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Box from './components/Box';
import List from './components/List';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'товар 1', content: 'Описание товара 1' },
    { id: 2, title: 'товар 2', content: 'Описание товара 2' },
    { id: 3, title: 'товар 3', content: 'Описание товара 3' },
    { id: 4, title: 'товар 4', content: 'Описание товара 4' },
  ]);

  const liElem = ['контент 1', 'контент 2', 'контент 3', 'контент 4'];
  const renderItem = (item, index) => {
    return (
      <div>
        {item} - уникальный контент
      </div>
    )
  };

  // Задание 4 Вариант 1
  const router = createBrowserRouter([
    { path: "/", element: <ListPage articles={articles} /> },
    { path: "/articles/:id", element: <DetailPage articles={articles} /> },
  ]);

  return (
    <div className="App">
      <h2>Задание 1 пример использования "children"</h2>
      <Box>
        <p>Это первый Box</p>
        <button>Кнопка внутри Box</button>
      </Box>
      <Box>
        <p>Это второй Box</p>
        <button>Кнопка внутри Box</button>
      </Box>

      <h2>Задание 2 примр использования "RenderProps"</h2>
      <List listItems={liElem} renderItem={renderItem} />

      {/* Вариант 1 */}
      <h2>Задание 4 Приложение для просмотра товаров</h2>
      <RouterProvider router={router} />

      {/* Вариант 2 */}
      <Router>
        <div>
          <h2>Задание 4 Приложение для просмотра товаров</h2>
          <Routes>
            <Route path="/articles/:id" element={<DetailPage articles={articles} />} />
            <Route path="/" element={<ListPage articles={articles} />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}
export default App;
