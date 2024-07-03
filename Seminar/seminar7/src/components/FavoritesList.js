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
            <h2>Избранные продукты</h2>
            <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px'
                        }} >
                {favoriteItems.map(item => (
                    <li style={{
                        display: 'flex',
                        gap: '25px',
                        justifyContent: 'center',
                    }} key={item.id}>
                        <div>Продукт: {item.name} - Цена: {item.price}</div>
                        <button onClick={() => handleRemoveFromFavorite(item)}>Удалить из избранного</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteList;