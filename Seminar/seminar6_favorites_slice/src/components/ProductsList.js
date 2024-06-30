import { useDispatch } from "react-redux";
import { addFavorite } from '../reducers/FavoritesSlice';

function ProductsList({ products }) {

    const dispatch = useDispatch();

    const handleAddToFavorite = (item) => {
        dispatch(addFavorite(item));
    }

    return (
        <div>
            <h2>All Products</h2>
            <ul>
                {products.map(item => (
                    <li key={item.id}>
                        <div>{item.name} - {item.price}</div>
                        <button onClick={() => handleAddToFavorite(item)}>Add to Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;