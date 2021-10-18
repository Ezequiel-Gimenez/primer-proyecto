import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Carrousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img 
                        className="d-block w-100"
                        src="./assets//images/carousel1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="./assets//images/carousel2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
