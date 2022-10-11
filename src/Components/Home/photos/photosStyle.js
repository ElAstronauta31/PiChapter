import styled from "@emotion/styled";

export const Holder= styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    justify-content: space-between;
    flex-flow: row nowrap
`;



export const Image1 = styled.img`
    width: 800px;
    height: 450px;
    transform: translateX(-63%);
    scale: 0.8;
    border: 4px solid #FFFFFF;
`

export const Image2 = styled.img`
    width: 800px;
    height: 450px;
    border: 4px solid #FFFFFF;
`
export const Image3 = styled.img`
    width: 800px;
    height: 450px;
    transform: translateX(63%);
    scale: 0.80;
    border: 4px solid #FFFFFF;
`

export const ImgDiv= styled.div`
    position: absolute;
    opacity: .5;
    
`;

export const ArrowImg = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

export const MainImgDiv= styled.div`
    position: absolute;
`;

export const ArrowLeftImgDiv = styled.div`
    width: 100px;
    margin: auto 0px;
    padding-left: 50px;
    z-index: 11;
`
export const ArrowRightImgDiv = styled.div`
    width: 100px;
    margin: auto 0px;
    padding-right: 50px;
    z-index: 11;
`
export const SlideshowDiv = styled.div`
    width: 808px;
    height: 450px;
    padding-top: 25px;
`
