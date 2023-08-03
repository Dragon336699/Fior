import { Col, Container, Row } from 'react-bootstrap'
import styles from './footer.module.css'
function Footer() {
    return (
        <Container className= {`${styles.footer}`} fluid>
            <Row className='justify-content-center'>
                <Col md = '5' lg = '5' xl = '5'>
                    <div className= {`${styles.footer_line}`}></div>
                    <p className= {`${styles.footer_author}`}>© 2023 All Rights Reserved By Free Html Templates</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer