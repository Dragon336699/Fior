import { Col, Container, Row } from "react-bootstrap"
import styles from './about.module.css'
function About() {
    return (
        <Container fluid className={`${styles.about_section}`}>
            <Row className='justify-content-center'>
                <Col md='1' lg='1' xl='1'>
                </Col>
                <Col md='5' lg='5' xl='5'>
                    <img className={`${styles.about_section_img}`} src={"https://html.design/demo/fior/images/about-img.png"} alt="" />
                </Col>
                <Col className={`${styles.about_section_detailBox}`} md='4' lg='4' xl='4'>
                    <h2 className={`${styles.about_section_title}`}>About Flowers</h2>
                    <p className={`${styles.about_section_desc}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since ever since ever since
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default About