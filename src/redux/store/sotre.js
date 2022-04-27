import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// -----------------------------------
import { reducer } from './combineReducers'
//=========================================

//cartFromLocalStorage
const cartFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')) : []

//cart initialState 
const { cartItems = [], cartItemsCounter = 0 } = cartFromLocalStorage

const initialState = {
    cart: { cartItems, cartItemsCounter }
}

//thunk:a function for have action creatore async
// compose(...functions)
// Composes functions from right to left. 
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store