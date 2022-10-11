import React, { useState, useEffect, useRef } from 'react';
import { ArrowImg, ArrowLeftImgDiv, ArrowRightImgDiv, Holder, Image1, Image2, Image3, ImgDiv, MainImgDiv, SlideshowDiv } from './photosStyle';
import Anniversary from '../../../siteContent/slideshow/Anniversary.jpeg';
import P19 from '../../../siteContent/slideshow/P19.jpg';
import PIAs297 from '../../../siteContent/slideshow/PIAs297.jpg';
import LeftArrow from '../../../siteContent/LeftArrow.png';
import RightArrow from '../../../siteContent/RightArrow.png';
import { PhotosData } from './photosData';
import './photos.css';

const Photos = () => {
    const [current, setCurrent] = useState(0);
    const length = PhotosData.length;
    const delay = 15000;
    const timeoutRef = useRef(null)

    const nextImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    const prevImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const classNameImg = (index) => {
        if ( index === current ) {
            return 'currentImg'
        } else if ( index === current - 1 || (index === length - 1 && current === 0) ) {
            return 'nextImg'
        } else if ( index === current + 1 || (index === 0 && current === length -1)) {
            return 'prevImg'
        } else {
            return 'slide'
        }
    }

    const className = (index) => {
        if (index === current) {
            return 'activeSlide'
        } else if (index === current - 1 ||  (index === length - 1 && current === 0) ) {
            return 'nextSlide'
        } else if (index === current + 1 || (index === 0 && current === length -1)) {
            return 'prevSlide'
        } else {
            return 'slide'
        }
    }

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => 
            setCurrent(current === length - 1 ? 0 : current + 1
            ),
            delay
        );
        return () => {}
    }, [current])

    if(!Array.isArray(PhotosData) || length <= 0) {
        return null
    }
    // left and right arrow are behind the current picture have to place them correctly
    return (
        <Holder>
            <ArrowLeftImgDiv>
                <ArrowImg src={LeftArrow} onClick={nextImg} ></ArrowImg> 
            </ArrowLeftImgDiv>
            <SlideshowDiv>
                {PhotosData.map((photo, index) => {
                return (
                    <div className={className(index)} key={index}>
                        <img src={photo.url} alt={photo.description} className={classNameImg(index)}></img>
                    </div>
                )
                 })}
            </SlideshowDiv>
            
            <ArrowRightImgDiv>
                <ArrowImg src={RightArrow} onClick={prevImg}></ArrowImg>
            </ArrowRightImgDiv>
        </Holder>
    );
};

export default Photos;