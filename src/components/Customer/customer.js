import { Col, Container, Row } from 'react-bootstrap'
import styles from './customer.module.css'
import img1 from '../../assets/Client/client1.png'
import img2 from '../../assets/Client/client2.png'

function Customer() {
    return (
        <Container fluid className={`${styles.customer_container}`}>
            <span className={`${styles.customer_numberPage}`}>04</span>
            <Row className={`justify-content-center`}>
                <h2 className={`${styles.customer_heading}`}>What Our Customers Say</h2>
            </Row>
            <Row className={`justify-content-center ${styles.customer_boxRow}`}>
                <Col className={`${styles.customer_box}`} md='5' lg='5' xl='5'>
                    <img src={img1} className={`${styles.customer_img}`} />
                    <div className= {`${styles.customer_detail}`}>
                        <h2 className={`${styles.customer_name}`}>NOMIL DU</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over
                        </p>
                    </div>
                </Col>
                {/* <Col md='1' lg='1' xl='1'></Col> */}
                <Col className={`${styles.customer_box}`} md='5' lg='5' xl='5'>
                    <img src={img2} className={`${styles.customer_img}`} />
                    <div className= {`${styles.customer_detail}`}>
                        <h2 className={`${styles.customer_name}`}>ZABIH JO</h2>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Customer