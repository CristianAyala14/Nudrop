import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/caroucel.css"
//MEDIA CARROUCEL IMGS
import ImgCarroucel from "../mocks/imagenes-carroucel"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < ImgCarroucel.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(ImgCarroucel.length - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <div>
            <div className="carousel" style={{ backgroundImage: `url(${ImgCarroucel[currentIndex]})`, backgroundPosition: 'center'}}>
                {/* <button className="slider-btn-left" onClick={prevSlide}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                
                <button className="slider-btn-right" onClick={nextSlide}>
                    <i className="fa-solid fa-angles-right"></i>
                </button> */}
            </div>
        </div>
    )
}

export default Carousel;