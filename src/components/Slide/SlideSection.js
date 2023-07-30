import { Col, Container, Row } from 'react-bootstrap'
import styles from './slidesection.module.css'
import { Fragment } from 'react'
function Slide() {
    return (
        <Container fluid className={`${styles.slide_section} `}>
            <Row className={`position-relative justify-content-center`}>
                <div className={`${styles.slide_numberBox} d-flex`} md='2' lg='2'>
                    <span className='mb-3'>01</span>
                    <div className={`${styles.slide_numberBox_line} ml-4`}>
                    </div>
                    <span className='mt-3'>02</span>
                </div>
                <Col className={`${styles.slide_detailBox} `} md='9' lg='9'>
                    <h2>Welcome</h2>
                    <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                    <p className={`${styles.slide_detailBox_descrip} `}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since
                    </p>
                    <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    <div className={`${styles.slideButton__wrap}`}>
                        <button className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </Col>
            </Row>
            <span className={`${styles.slide_numberPage}`}>
                01
            </span>
        </Container>
    )
}
export default Slide