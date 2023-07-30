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


function Gallery() {
    return (
        <Container fluid className={`${styles.gallery_container}`}>

            <Row className='justify-content-center'>
                <h2 className={`${styles.gallery_heading} `}>Our Gallery</h2>
            </Row>
            <Container className={`${styles.gallery_imgBox}`} fluid>
                <Row className={`justify-content-center`}>
                    <Col className={`${styles.img_box1}`} md='6' lg='6' xl='6'>
                        <Row>
                            <Col md='6' lg='6' xl='6'>
                                <div className = {`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img1} />
                                </div>
                                <div className = {`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img4} />
                                </div>
                            </Col>
                            <Col md='6' lg='6' xl='6'>
                                <div className = {`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img2} />
                                </div>
                                <div className = {`${styles.gallery_img_container}`}>
                                    <img className={`${styles.gallery_img}`} src={img5} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className = {`${styles.gallery_img_container}`}>
                                    <img className={` h-100 ${styles.gallery_img}`} src={img7} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className={`${styles.img_box2}`} md='3' lg='3' xl='3'>
                        <div className = {`mt-0 ${styles.gallery_img_container}`}>
                            <img className={`${styles.gallery_img}`} src={img3} />
                        </div>
                        <div className = {`${styles.gallery_img_container}`}>
                            <img className={`${styles.gallery_img}`} src={img6} />
                        </div>
                        <div className = {` ${styles.gallery_img_container}`}>
                            <img className={`${styles.gallery_img}`} src={img8} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Gallery