import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Image, Spinner } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
// ------------------------------------------ Action
import { productAction } from '../../redux/actions/productAction'
import { addToCartAction } from '../../redux/actions/cartAction'
// ------------------------------------------ css
import './ProductDetail.css'

// =========================== Product Component - page
const Product = () => {

    //id from url
    const params = useParams()

    //like mapDispatchToProps
    const dispatch = useDispatch()

    //like mapStateToProps
    const productDetail = useSelector(state => state.productDetail)
    const cart = useSelector(state => state.cart)

    const { loading, product } = productDetail

    //product is in cart
    const inCart = cart.cartItems.find(item => item.id === product.id)

    // useEffect
    useEffect(() => {
        dispatch(productAction(params.id))
    }, [dispatch, params])

    //add product to cart
    const addToCartHandler = (id) => {
        dispatch(addToCartAction(params.id))
    }


    //show product price and product discount
    let productPrice = <div className='product-price'>
        <p className='mb-4' >
            {product.price ? product.price.toLocaleString() : ''}
            <span > تومان</span>
        </p>
    </div>
    //show product price and product discount
    if (product.discount) {
        productPrice = <div className='product-price'>
            <span className='product-dis'>{product.discount}٪</span>
            <del className='product-discount'>{product.price.toLocaleString()}</del>
            <p className='mb-4 '>
                {(product.price - (product.price * product.discount) / 100).toLocaleString()}
                <span > تومان</span>
            </p>
        </div>
    }

    // -----------
    return (

        <>
            {
                loading ? <h4 className="text-center mt-5">< Spinner animation="grow" variant="info" /></h4 > :
                    <Row className='product-detail py-4 rounded'>
                        <Col md={6} lg={5} xl={3}>
                            <Image src={product.image} fliud="true" className=' rounded' />
                        </Col>
                        <Col md={6} lg={7} xl={6} className="p-4 product-detail-des">
                            <h3 className='mb-2'>{product.title}</h3>
                            <div className='product-star mb-4'>
                                <Icon.StarFill />
                                <span className='me-2'>4.7</span>
                            </div>
                            <h4 className='mb-3'>ویژگی محصول :</h4>
                            <p>{product.description}</p>

                        </Col>
                        <Col md={6} lg={6} xl={3} className="mt-5 mx-auto mx-xl-0">

                            <div className='product-detail-price p-3'>
                                <h5 className='mb-5'>موجود در انبار  </h5>
                                {productPrice}
                                {inCart ?
                                    <p className="text-center text-info">در سبد شما</p> :
                                    <Button
                                        className="d-block mx-auto " type="button"
                                        onClick={() => addToCartHandler(product.id)}>
                                        افزودن به سبد خرید
                                        <Icon.CartFill className='me-2' />
                                    </Button>

                                }
                            </div>
                        </Col>
                    </Row>
            }
        </>
    )
}

export default Product
