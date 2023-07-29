import { Container, Row } from 'react-bootstrap';
import Header from '../Header/header';
import Slide from '../Slide/SlideSection';
import styles from './startArea.module.css'
function StartArea() {
    return (
        <Container fluid>
            <Row className= {`${styles.startArea}`}>
                <Header />
                <Slide />
            </Row>
        </Container>
    )
}

export default StartArea