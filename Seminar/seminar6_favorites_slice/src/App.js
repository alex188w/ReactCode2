// Задание 2 (тайминг 25 минут)
// Создать приложение, которое позволяет пользователям добавлять товары в список "Избранное" и 
// управлять этим списком (добавлять новые товары и удалять их).
// 1. Настройка Redux Store:
// a. Создайте favoritesSlice с использованием createSlice. Определите начальное состояние, 
// которое будет содержать массив избранных товаров. Каждый товар должен иметь id, 
// name, description, и price.
// b. Определите редьюсеры для добавления товара в избранное и удаления товара из 
// избранного.
// 2. Компоненты React:
// a. Создайте компонент, который отображает список всех товаров. Для каждого товара 
// предусмотрите кнопку "Добавить в избранное", которая будет добавлять товар в список 
// избранных.
// b. Разработайте компонент, который отображает список товаров, добавленных в 
// избранное. Для каждого товара в этом списке должна быть кнопка "Удалить из 
// избранного", позволяющая удалять товар из списка.

import './App.css';
import FavoriteList from './components/FavoritesList';
import ProductsList from './components/ProductsList';

function App() {
  const products = [
    { id: 1, name: 'Product_1', price: '100', description: 'Description_1' },
    { id: 2, name: 'Product_2', price: '200', description: 'Description_2' },
    { id: 3, name: 'Product_3', price: '300', description: 'Description_3' }
];
  return (
    <div className="App">
       <ProductsList products={products} />
       <FavoriteList />
    </div>
  );
}

export default App;
