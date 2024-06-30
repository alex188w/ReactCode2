import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from '../reducers/FavoritesSlice';

function FavoriteList() {

    const favoriteItems = useSelector(state => state.favorites.array);
    const dispatch = useDispatch();

    const handleRemoveFromFavorite = (item) => {
        dispatch(removeFavorite(item));
    }

    return (
        <div>
            <h2>Favorite Products</h2>
            <ul>
                {favoriteItems.map(item => (
                    <li key={item.id}>
                        <div>{item.name} - {item.price}</div>
                        <button onClick={() => handleRemoveFromFavorite(item)}>Remove from Favorites</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteList;