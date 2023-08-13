import { Col, Container, Row } from 'react-bootstrap'
import styles from './info.module.css'
import img1 from '../../assets/InstaImg/insta-1.png'
import img2 from '../../assets/InstaImg/insta-2.png'
import img3 from '../../assets/InstaImg/insta-3.png'
import img4 from '../../assets/InstaImg/insta-4.png'
import img5 from '../../assets/InstaImg/insta-5.png'
import img6 from '../../assets/InstaImg/insta-6.png'
import { useLocation } from 'react-router-dom'

function Info() {
    const location = useLocation()
    return (
        <Container fluid className={`${styles.info_section}`}>
            <Row className={`justify-content-center`}>
                <Col className={`${styles.info_sectionIntro}`} xs = '12' md='3' lg='3' xl='3'>
                    <h2 className={`${styles.info_section_name}`}>Fior</h2>
                    <p className={`${styles.info_section_des}`}>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration
                    </p>
                </Col>
                <Col className={`${styles.info_sectionLink}`} md='3' lg='2' xl='2'>
                    <h2 className={`${styles.info_sectionLink_heading}`}>Useful Link</h2>
                    <ul className={`${styles.info_sectionLink_list}`}>
                        <li className={`${styles.info_sectionLink_item} ${location.pathname === '/' ? styles.active : ''}`}>
                            <a href='/'>Home</a>
                        </li>
                        <li className={`${styles.info_sectionLink_item} ${location.pathname === '/about' ? styles.active : ''}`}>
                            <a href='/about'>About</a>
                        </li>
                        <li className={`${styles.info_sectionLink_item} ${location.pathname === '/gallery' ? styles.active : ''}`}>
                            <a href='/gallery'>Gallery</a></li>
                        <li className={`${styles.info_sectionLink_item} ${location.pathname === '/contact' ? styles.active : ''}`}>
                            <a href='/contact'>Contact Us</a>
                        </li>
                    </ul>
                </Col>
                <Col className={`${styles.info_sectionInsta}`} md='3' lg='2' xl='2'>
                    <h2 className={`${styles.info_sectionInsta_heading}`}>Instagram</h2>
                    <Row className='justify-content-center'>
                        <Col className={`${styles.info_sectionInsta_containerImg}`} xs = '3' md='3' lg='3' xl='3'>
                            <img className={`${styles.info_sectionInsta_img}`} src={img1} alt = ""/>
                            <img className={`${styles.info_sectionInsta_img}`} src={img3} alt = ""/>
                            <img className={`${styles.info_sectionInsta_img}`} src={img5} alt = ""/>
                        </Col>
                        <Col className={`${styles.info_sectionInsta_containerImg}`} xs = '3' md='3' lg='3' xl='3'>
                            <img className={`${styles.info_sectionInsta_img}`} src={img2} alt = ""/>
                            <img className={`${styles.info_sectionInsta_img}`} src={img4} alt = ""/>
                            <img className={`${styles.info_sectionInsta_img}`} src={img6} alt = ""/>
                        </Col>
                    </Row>
                </Col>
                <Col className={`${styles.info_sectionContact}`} md='3' lg='3' xl='3'>
                    <h2 className={`${styles.info_sectionContact_heading}`}>
                        Contact
                    </h2>
                    <ul className={`${styles.info_sectionContact_list}`}>
                        <li className={`${styles.info_sectionContact_item}`}>
                            <i className="fa-solid fa-location-dot"></i>
                            It is a long fact that a reader
                        </li>
                        <li className={`${styles.info_sectionContact_item}`}>
                            <i className="fa-solid fa-phone"></i>
                            +01 1234567890
                        </li>
                        <li className={`${styles.info_sectionContact_item}`}>
                            <i className="fa-solid fa-envelope"></i>
                            demo@gmail.com
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Info