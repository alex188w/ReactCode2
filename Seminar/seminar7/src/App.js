import './App.css';
import FavoriteList from './components/FavoritesList';
import GetUsers from './components/GetUsers';
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
       <GetUsers />
    </div>
  );
}

export default App;
