import { Container, Row,Col} from 'react-bootstrap'
import styles from './arrange.module.css'
import img1 from '../../assets/image/arrangeBg.jpg'
function Arrange() {
    return (
        <Container fluid className= {`${styles.arrange_section}`}>
            <Row className='justify-content-center'>
                <Col className= {`${styles.detailBox}`} md = '7' lg = '7' xl = '7'>
                    <h2 className= {`${styles.detailBox_name}`}>Our Wonderful Arrangements</h2>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                    </p>
                </Col>
            </Row>
            <span className= {`${styles.arrange_section_numberPage}`}>05</span>
        </Container>
    )
}

export default Arrange