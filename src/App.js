import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

// ------------------------------------------------ pages
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart'
import About from './pages/About/About'
// ------------------------------------------------ css
import './App.css'


// ===================
const App = () => {


  return (
    <Router  >
      <Header />

      <main className='main'>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
