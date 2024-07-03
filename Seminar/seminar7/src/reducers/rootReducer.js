import { combineReducers } from "redux";
import favoritesReducer from './FavoritesSlice';
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({    
    favorites: favoritesReducer,
    users: usersReducer,
});

export default rootReducer;