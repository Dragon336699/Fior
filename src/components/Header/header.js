import { Container, Row, Col } from 'react-bootstrap'
import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useState,useRef } from 'react'
function Header() {
    const location = useLocation()
    const navRef = useRef()
    const openNav = () => {
        navRef.current.classList.toggle(`${styles.nav_active}`)
    }
    return (
        <Container fluid className={styles.header}>
            <Row className='justify-content-center'>
                <Col className={styles.header_brand} xs='10' md='2' lg='2' xl='2'>
                    <a href  = "/" className={styles.header_brand_name}>Fior</a>
                </Col>
                <Col className={`${styles.header_nav} `} md='6' lg='6' xl='6'>
                    <ul className={`${styles.header_nav_list} d-flex w-100`}>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/'>Home</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/about' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/about'>About</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/gallery' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/gallery'>Gallery</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/contact' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/contact'>Contact us</Link>
                        </li>
                    </ul>
                </Col>
                <Col className={`${styles.header_user}`} md='2' lg='2' xl='2'>
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
                <Col onClick={openNav} className={`${styles.header_bars}`} xs='2'>
                    <i className="fa-solid fa-bars"></i>
                </Col>
            </Row>
            <Row ref = {navRef} className={`${styles.header_nav_mobile_wrap}`}>
                <Col className={`${styles.header_nav_mobile}`} md='6' lg='6' xl='6'>
                    <ul className={`${styles.header_nav_list} w-100`}>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/'>Home</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/about' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/about'>About</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/gallery' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/gallery'>Gallery</Link>
                        </li>
                        <li lg='4' className={`${styles.header_nav_item} ${location.pathname === '/contact' ? styles.active : ''}`}>
                            <Link className={`${styles.header_nav_link}`} to='/contact'>Contact us</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Header