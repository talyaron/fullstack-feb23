import { useState, FC } from 'react'
import Button from "react-bootstrap/Button";
import Carousel from 'react-bootstrap/Carousel';

interface CarouselProps {
    one: string,
    two: string,
    three: string,
    four: string,
    five: string
}


const MyCarousel: FC<CarouselProps> = ({ one, two, three, four, five }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='carImg' src={one} alt="first image" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carImg' src={two} alt="second image" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carImg' src={three} alt="third image" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carImg' src={four} alt="firth image" />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carImg' src={five} alt="fifth image" />
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel;