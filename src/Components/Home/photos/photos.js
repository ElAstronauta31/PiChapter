import React from 'react';
import { Holder, Image1, Image2, Image3, ImgDiv, MainImgDiv } from './photosStyle';
import Anniversary from '../../../siteContent/Anniversary.jpeg';
import P19 from '../../../siteContent/P19.jpg';
import PIAs297 from '../../../siteContent/PIAs297.jpg';

const Photos = () => {

    
    return (
        <Holder>
            <ImgDiv>
                <Image1 src={P19}></Image1>
            </ImgDiv>
            <ImgDiv>
                <Image3 src={PIAs297}></Image3>
            </ImgDiv>
            <MainImgDiv>
                <Image2 src={Anniversary}></Image2>
            </MainImgDiv>
        </Holder>
    );
};

export default Photos;