import { Col, Container, Row } from 'react-bootstrap'
import styles from './slidesection.module.css'
import { useEffect, useRef, useState } from 'react'
import { logRoles } from '@testing-library/react'
function Slide() {
    const [elements, setElements] = useState([])
    const [isAnimating, setIsAnimating] = useState(false)
    useEffect(() => {
        const slideWrap = document.querySelectorAll(`.${styles.slide_wrapper}`)
        setElements(slideWrap)
    }, [])

    if (elements.length) {
        elements.forEach(item => {
            item.classList.remove(`${styles.slide_active}`)
        })
        elements[0].classList.add(`${styles.slide_active}`)
        elements[0].style.transition =''
    }
    
    const handleSlideRight = () => {
        setIsAnimating(true)
        setElements(prevElements => {
            const [first, ...rest] = prevElements;
            // rest[0].style.transition = ''
            // first.style.transition = ''
            first.style.left = '-100%'
            setTimeout(() => {
                first.style.transition = 'none'
                first.style.left = '100%'
                setIsAnimating(false)
            }, 800)
            // rest[1].style.transition = ''
            return [...rest, first]
        })
    }

    const handleSlideLeft = () => {
        setIsAnimating(true)
        setElements(prevElements => {
            const elementsCopy = [...prevElements];
            const last = elementsCopy.pop();
            elementsCopy[0].style.left = '100%'
            elementsCopy[elementsCopy.length - 1].style.transition = 'none'
            elementsCopy[elementsCopy.length - 1].style.left = '-100%'
            setTimeout(() => {
                // elementsCopy[elementsCopy.length - 1].style.transition = ''
                setIsAnimating(false)
            }, 800)
            return [last, ...elementsCopy];
        })

    }


    return (
        <Container fluid className={`${styles.slide_section} `}>
            <Row className={`position-relative justify-content-center`}>
                <div className={`${styles.slide_numberBox} d-flex`} md='2' lg='2'>
                    <span className='mb-3'>01</span>
                    <div className={`${styles.slide_numberBox_line} ml-4`}>
                    </div>
                    <span className='mt-3'>02</span>
                </div>
                <Col className={`${styles.slide_detailBox} `} md='10' lg='10'>
                    <div className={`${styles.slide_wrapper} ${styles.slide_active}`}>
                        <h2>Welcome 1</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>

                    <div className={`${styles.slide_wrapper}`}>
                        <h2>Welcome 2</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>
                    <div className={`${styles.slide_wrapper}`}>
                        <h2>Welcome 3</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>
                    <div className={`${styles.slideButton__wrap}`}>
                        <button onClick={(e) => {
                            if (isAnimating) {
                                e.preventDefault()
                            }
                            else {
                                return handleSlideLeft()
                            }
                        }} className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={(e) => {
                            if (isAnimating) {
                                e.preventDefault()
                            }
                            else {
                                return handleSlideRight()
                            }
                        }} className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Slide