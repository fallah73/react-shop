// productsListReducer
export const productsListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return {
                loading: true,
                products: []
            }
        case 'PRODUCT_LIST_SUCCESS':
            return {
                loading: false,
                products: action.payload
            }
        default:
            return state
    }
}
// productReducer
export const productReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case 'PRODUCT_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'PRODUCT_SUCCESS':
            return {
                loading: false,
                product: action.payload
            }
        default:
            return state
    }
}