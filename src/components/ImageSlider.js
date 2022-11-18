import React, { useState } from 'react'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    const thumbnailStyles = {
        width: `calc( 100% / ${slides.length} )`,
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    return (
    <div className='slider'>
        <div onClick={goToPrevious} className='left-arrow'>
            {"<"}
        </div>
        <div onClick={goToNext} className='right-arrow'>
            {">"}
        </div>
        <div style={slideStyles} className='slide'></div>
        <div className='thumbnails'>
            {slides.map((slide, slideIndex) => (
                <img style={thumbnailStyles} key={slideIndex} src={slide.url} onClick={() => goToSlide(slideIndex)} alt="thumbnail" className="thumbnail"/>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider