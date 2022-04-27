import { Container, Row, Col } from 'react-bootstrap'
// ---------------------- Css 
import './Footer.css'

// =================================== Footer  Component - Component
const Footer = () => {
    return (
        <div className='footer py-2'>
            <Container>
                <Row>
                    <Col className='text-center' >
                        <a href='https://www.linkedin.com/in/mehrdad-fallah-086b041b4/' target='_blank' rel="noreferrer">
                            &copy;
                            تمام حقوق مادی و معنوی متعلق به فروشگاه می‌باشد
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
