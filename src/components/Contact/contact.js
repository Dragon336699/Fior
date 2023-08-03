import { Container, Row, Col } from 'react-bootstrap'
import styles from './contact.module.css'
function Contact() {
    return (
        <Container className={`${styles.contact_section}`} fluid>
            <Row className='justify-content-center'>
                <Col md='5' lg='5' xl='5'>
                    <h2 className={`${styles.contact_section_heading}`}>Contact Us</h2>
                    <div className={`${styles.contact_box}`}>
                        <input className={`${styles.contact_section_input}`} placeholder='Name' />
                        <br />
                        <input className={`${styles.contact_section_input}`} placeholder='Email' />
                        <br />
                        <input className={`${styles.contact_section_input}`} placeholder='Phone Number' />
                        <br />
                        <input className={`${styles.contact_section_input}`} placeholder='Message' />
                    </div>
                    <div className={`${styles.contact_section_button_container}`}>
                        <button className={`${styles.contact_section_button}`}>SEND</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact