import axios from "axios"
// ----------------------------

// A thunk is a function that returns a function.
// This is a thunk.
// Return a function that accepts `dispatch` so we can dispatch later.
// Thunk middleware knows how to turn thunk async actions into actions.
// Thunk middleware lets me dispatch thunk async actions

//productsListAction
export const productsListAction = () => async (dispatch) => {

    try {
        dispatch({
            type: 'PRODUCT_LIST_REQUEST'
        })
        const { data } = await axios.get('http://localhost:3004/products')

        dispatch({
            type: 'PRODUCT_LIST_SUCCESS',
            payload: data
        })
    }
    catch (Error) {
        console.log(Error)
    }
}

// productAction
export const productAction = (id) => async (dispatch) => {

    try {
        dispatch({
            type: 'PRODUCT_REQUEST'
        })
        const { data } = await axios.get(`http://localhost:3004/products/${id}`)

        dispatch({
            type: 'PRODUCT_SUCCESS',
            payload: data
        })
    }
    catch (Error) {
        console.log(Error)
    }
}