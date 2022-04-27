// cartReducer
export const cartReducer = (state = { cartItems: [], cartItemsCounter: 0 }, action) => {

    switch (action.type) {

        case 'ADD_TO_CART':

            //newProduct 
            const newProduct = action.payload

            //find newProduct in cartItems
            const existProduct = state.cartItems.find(item => item.id === newProduct.id)

            if (existProduct) {

                return { //return prev cartItems
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === existProduct.id ? newProduct : item)
                }

            } else {

                return { //return prev cartItems and newProduct
                    ...state,
                    cartItemsCounter: state.cartItemsCounter + 1,
                    cartItems: [...state.cartItems, newProduct]
                }
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItemsCounter: state.cartItemsCounter - 1,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        default:
            return state
    }

}