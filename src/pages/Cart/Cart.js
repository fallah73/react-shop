import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
// -------------------------------------------------- Action
import { removeFromCartAction } from '../../redux/actions/cartAction'
// -------------------------------------------------- Css
import './Cart.css'

// ===================== Cart Component - page
const Cart = () => {


    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    // remove from cart
    const removeFromCart = (id) => {
        dispatch(removeFromCartAction(id))
    }

    // products discount array
    const productsDiscount = cartItems.map((item) => (item.price * item.discount / 100))

    // cartTotal
    const cartTotal = cartItems.reduce((previous, current) => previous + current.price, 0)
    const cartDiscount = productsDiscount.reduce((previous, current) => previous + current, 0)
    const sendPrice = 15000

    return (
        <div>
            <Row>
                <Col xl={9}>
                    <h5 className='mb-3'>سبد خرید</h5>
                    {
                        cartItems.length === 0 ? <p className='text-secondary'>سبد خرید خالی است</p> : (
                            <ListGroup  >
                                {cartItems.map((item) => (
                                    <ListGroup.Item key={item.id}>
                                        <Row className="align-items-center">
                                            <Col md={2} lg={2} xl={2} className="cart-product-img col-3 ">
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col md={5} lg={3} xl={4} className="cart-product-name  col-9 ">
                                                {item.name}
                                            </Col>
                                            <Col md={3} lg={3} xl={3} className="cart-product-price col-9 text-start">
                                                {item.price.toLocaleString()}
                                                <span className='me-1'>تومان</span>
                                            </Col>
                                            <Col md={1} lg={3} xl={3} className="cart-product-btn-del col-3 text-center ">
                                                <Button
                                                    type="button"
                                                    variant="light"
                                                    bg="light"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Icon.Trash />
                                                </Button>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>)
                    }

                </Col>
                <Col xl={3} className=' pt-3'>
                    {
                        cartItems.length === 0 ? null :
                            <ListGroup className='cart-total mt-4 '>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p className='text-secondary'>مبلغ کل </p>
                                    <p >
                                        {cartTotal.toLocaleString()}
                                        <span className='me-1 '>تومان</span>
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p className='text-secondary'>تخفیف </p>
                                    <p className='text-danger'>
                                        {cartDiscount.toLocaleString()}
                                        <span className='me-1'>تومان</span>
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between '>
                                    <p className='text-secondary'>هزینه ارسال </p>
                                    <p>
                                        {sendPrice.toLocaleString()}
                                        <span className='me-1'>تومان</span>
                                    </p>
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item className='d-flex justify-content-between'>
                                    <p className='text-secondary'>قابل پرداخت </p>
                                    <p className='text-info'>
                                        {(cartTotal - cartDiscount + sendPrice).toLocaleString()}
                                        <span className='me-1'>تومان</span>
                                    </p>
                                </ListGroup.Item>
                                <ListGroup.Item className=' '>
                                    <Link to='/'>
                                        <Button
                                            className="d-block mx-auto btn-success " type="button"
                                        >
                                            ادامه فرایند خرید
                                        </Button>
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Cart
