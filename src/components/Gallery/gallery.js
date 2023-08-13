import { Container, Row, Col } from 'react-bootstrap'
import styles from './gallery.module.css'
import img1 from '../../assets/gallery/pic1.jpg'
import img2 from '../../assets/gallery/pic2.jpg'
import img3 from '../../assets/gallery/pic3.jpg'
import img4 from '../../assets/gallery/pic4.jpg'
import img5 from '../../assets/gallery/pic5.jpg'
import img6 from '../../assets/gallery/pic6.jpg'
import img7 from '../../assets/gallery/pic7.jpg'
import img8 from '../../assets/gallery/pic8.jpg'
import { useLocation } from 'react-router-dom'


function Gallery() {
    const location = useLocation()
    return (
        <Container fluid className={`${styles.gallery_container}`}>
            <Row className='justify-content-center'>
                <h2 className={`${styles.gallery_heading} `}>Our Gallery</h2>
            </Row>
            <Container className={`${styles.gallery_imgBox}`} fluid>
                <Row className={`justify-content-center`}>
                    <Col className={`${styles.img_box1}`} md='10' lg='7' xl='7'>
                        <Row>
                            <Col md='6' lg='6' xl='6'>
                                <div className={`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img1} />
                                </div>
                                <div className={`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img4} />
                                </div>
                            </Col>
                            <Col md='6' lg='6' xl='6'>
                                <div className={`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img2} />
                                </div>
                                <div className={`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img5} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className={`${styles.gallery_img_container}`}>
                                    <img className={` h-100 ${styles.gallery_img}`} src={img7} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={`${styles.img_box2}`} md='0' lg='3' xl='3'>
                        <Row className={`${styles.img_box2_row} justify-content-center`}>
                            <Col md='10' lg = '12' xl = '12'  className={`mt-0 ${styles.gallery_img_container} ${styles.gallery_img_container3}`}>
                                <img className={`${styles.gallery_img} h-100 `} src={img3} />
                            </Col>
                            <Col md='10' lg = '12' xl = '12'  className={`${styles.gallery_img_container} ${styles.gallery_img_container6}`}>
                                <img className={`${styles.gallery_img} h-100`} src={img6} />
                            </Col>
                            <Col md='10' lg = '12' xl = '12'  className={` ${styles.gallery_img_container} ${styles.gallery_img_container8}`}>
                                <img className={`${styles.gallery_img} h-100`} src={img8} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <span hidden = {location.pathname !== '/' ? true : false} className={`${styles.gallery_section_numberPage}`}>03</span>
        </Container>
    )
}
export default Gallery