import { useDispatch } from "react-redux";
import { addFavorite } from '../reducers/FavoritesSlice';

function ProductsList({ products }) {

    const dispatch = useDispatch();

    const handleAddToFavorite = (item) => {
        dispatch(addFavorite(item));
    }

    return (
        <div >
            <h2>Каталог продуктов</h2>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
            }} >
                {products.map(item => (
                    <li style={{
                        display: 'flex',
                        gap: '25px',
                        justifyContent: 'center',
                    }} key={item.id}>
                        <div>Продукт: {item.name} - Цена: {item.price}</div>
                        <button onClick={() => handleAddToFavorite(item)}>Добавить в избранное</button>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default ProductsList;