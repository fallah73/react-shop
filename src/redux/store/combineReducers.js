import { combineReducers } from 'redux'
// --------------------------------------
import { productsListReducer, productReducer } from '../reducers/productReducer'
import { cartReducer } from '../reducers/cartReducer'

// ======================================= combineReducers
export const reducer = combineReducers({
    productsList: productsListReducer,
    productDetail: productReducer,
    cart: cartReducer
})
