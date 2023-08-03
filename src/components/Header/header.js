import { Container,Row,Col } from 'react-bootstrap'
import styles from './header.module.css'
function Header() {
    return (
        <Container className= {styles.header}>
            <Row className='justify-content-center'>
                <Col className= {styles.header_brand} md= '2' lg = '2' xl = '2'>
                    <span>Fior</span>
                </Col>
                <Col className={`${styles.header_nav} `} md= '6' lg = '6' xl = '6'>
                    <ul className={`${styles.header_nav_list} d-flex w-100`}>
                        <li lg = '4' className={`${styles.header_nav_item} `}>
                            <a className={`${styles.header_nav_link}`} href='/'>Home</a>
                        </li>
                        <li lg = '4' className={`${styles.header_nav_item} `}>
                            <a className={`${styles.header_nav_link}`} href='/about'>About</a>
                        </li>
                        <li lg = '4' className={`${styles.header_nav_item} `}>
                            <a className={`${styles.header_nav_link}`} href='/gallery'>Gallery</a>
                        </li>
                        <li lg = '4' className={`${styles.header_nav_item}`}>
                            <a className={`${styles.header_nav_link}`} href='/contact'>Contact us</a>
                        </li>
                    </ul>
                </Col>
                <Col className={`${styles.header_user}`} md= '2' lg = '2' xl = '2'>
                    <ul className={`${styles.header_user_list} d-flex`}>
                        <li className={`${styles.header_user_item}`}>Log in</li>
                        <li className={`${styles.header_user_item}`}>
                            <i className="fa-light fa-bag-shopping"></i>
                            </li>
                        <li className={`${styles.header_user_item}`}>
                            <i className="fa-light fa-magnifying-glass"></i>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Header