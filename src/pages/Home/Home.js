import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Spinner } from 'react-bootstrap'
// ----------------------------------------------- Component 
import Product from '../../components/Product/Product'
// ----------------------------------------------- Action
import { productsListAction } from '../../redux/actions/productAction'
// ----------------------------------------------- Css
import './Home.css'

// ======================= Home Component - page
const Home = () => {


    const dispatch = useDispatch()

    const productsList = useSelector(state => state.productsList)
    const { loading, products } = productsList


    useEffect(() => {
        dispatch(productsListAction())
    }, [dispatch])


    return (
        <>
            {
                loading ? <h4 className="text-center mt-5">< Spinner animation="grow" variant="info" /></h4 > :
                    <Row>
                        {products.map((item) => {
                            return (
                                <Col key={item.id} md={6} lg={4} xl={3} >
                                    <Product product={item} />
                                </Col>
                            )
                        })}
                    </Row>
            }
        </>
    )
}

export default Home
