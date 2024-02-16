import { combineReducers } from "redux";
import categories from '../features/categories/redux/reducers/categories-reducer';
import products from '../features/products/redux/reducers/products-reducer';
import { connectRouter } from "connected-react-router";

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    categories,
    products
})

