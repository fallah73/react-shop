import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
// ------------------------------ Css
import './Product.css'

// =================================== Product  Component - Component
const Product = ({ product }) => {

    //show product price and product discount
    let productPrice = <div className='product-price'>
        <p className='mb-0 '>
            {product.price.toLocaleString()}
            <span > تومان</span>
        </p>
    </div>

    //show product price and product discount
    if (product.discount) {
        productPrice = <div className='product-price'>
            <del className='product-discount'>{product.price.toLocaleString()}</del>
            <p className='mb-0 '>
                {(product.price - (product.price * product.discount) / 100).toLocaleString()}
                <span > تومان</span>
            </p>
        </div>
    }

    return (
        <Card className="mb-4 p-3  product-cart">
            <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body className='p-1'>
                <Link to={`/product/${product.id}`}>
                    <Card.Title className='mb-5 mt-2'>{product.title}</Card.Title>
                </Link>
                <Card.Text as='div' className='d-flex align-items-end justify-content-between'>

                    {productPrice}

                    <div className='product-star'>
                        <span>4.7</span>
                        <Icon.StarFill />
                    </div>
                </Card.Text>

            </Card.Body>
            {product.discount ? <span className='product-dis'>{product.discount}٪</span> : null}
        </Card >
    )
}

export default Product
