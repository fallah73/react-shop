import axios from "axios"
// ----------------------------

// addToCartAction
export const addToCartAction = (id) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`http://localhost:3004/products/${id}`)

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: data.id,
                name: data.title,
                image: data.image,
                price: data.price,
                discount: data.discount
            }//infonrmations need in cart
        })

        // localStorage setItem cart
        localStorage.setItem('cartItems', JSON.stringify(getState().cart))


    } catch (error) {
        console.log(error)
    }
}

// removeFromCartAction
export const removeFromCartAction = (id) => async (dispatch, getState) => {
    try {

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })

        // localStorage setItem cart
        localStorage.setItem('cartItems', JSON.stringify(getState().cart))


    } catch (error) {
        console.log(error)
    }
}