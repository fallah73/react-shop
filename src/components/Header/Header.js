import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// -------------------------------------- Css
import './Header.css'

// =================================== Header  Component - Component
const Header = () => {

    let { cartItemsCounter } = useSelector(state => state.cart)

    return (
        <header className='header'>
            <Navbar collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand as={Link} to="/" className='me-0' > صفحه اصلی</Navbar.Brand>
                    <Nav className="me-4">
                        <Nav.Link as={Link} to="/about">درباره ما </Nav.Link>
                    </Nav>
                    <Nav className="me-auto ">
                        <Nav.Link eventKey={2} as={Link} to="/cart" className='cart-icon p-0'>
                            {cartItemsCounter ? <Badge bg="danger">{cartItemsCounter}</Badge> : null}
                            <Icon.Cart />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
