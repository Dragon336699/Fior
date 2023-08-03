import { Col, Container, Row } from 'react-bootstrap'
import styles from './slidesection.module.css'
import { useEffect, useState } from 'react'
function Slide() {
    const [hide, setHide] = useState(true)
    const [elements, setElements] = useState([])
    useEffect(() => {
        const slideWrap = document.querySelectorAll(`.${styles.slide_wrapper}`)
        setElements(slideWrap)
    }, [])

    const handleSlideRight = () => {

        setElements((prevElements) => {
            const [first, ...rest] = prevElements;
            return [...rest, first]
        })
        elements.forEach((item) => {
            item.hidden = true;
        })
        elements[0].hidden = false
    }

    const handleSlideLeft = () => {

        setElements(prevElements => {
            
            const elementsCopy = [...prevElements]; 
            const last = elementsCopy.pop();
            return [last, ...elementsCopy];
        })
        console.log(elements)

        elements.forEach((item) => {
            item.hidden = true;
        })
        elements[0].hidden = false
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
                    <div className={`${styles.slide_wrapper}`}>
                        <h2>Welcome</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>
                    <div hidden className={`${styles.slide_wrapper} `}>
                        <h2>Welcome 1</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>
                    <div hidden className={`${styles.slide_wrapper} `}>
                        <h2>Welcome 2</h2>
                        <h1 className={`${styles.slide_detailBox_name}`}>Flowers shop</h1>
                        <p className={`${styles.slide_detailBox_descrip} `}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since
                        </p>
                        <button className={`${styles.slide_button_buy} btn btn-dark`}>Buy now</button>
                    </div>
                    <div className={`${styles.slideButton__wrap}`}>
                        <button onClick={handleSlideLeft} className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={handleSlideRight} className={`${styles.slideButton__control}`}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Slide