import { Col, Container, Row } from "react-bootstrap"
import styles from './reason.module.css'
function Reason() {
    return (
        <Container fluid className= {`${styles.reason_section}`}>
            <Row className={`justify-content-center`}>
                <Col className={`${styles.reason_section_col}`} xs = '10' md='10' lg='10'>
                    <h2 className= {`${styles.reason_section_heading}`}>Why Choose Us</h2>
                    <p className= {`${styles.reason_section_desc}`}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin wordsContrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                    </p>
                    <button className={`btn ${styles.reason_section_button}`}>Read More</button>
                </Col>
            </Row>
            <span className={`${styles.reason_section_numberPage}`}>02</span>
        </Container>
    )
}
export default Reason