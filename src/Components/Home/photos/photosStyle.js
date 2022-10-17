import styled from "@emotion/styled";

export const Holder= styled.div`
    display: flex;
    width: 100%;
    height: 450px;
    padding-top: 25px;
    justify-content: space-between;
    flex-flow: row nowrap;
    @media (max-width: 1200px) {
        position: relative;
        justify-content: center;
        max-width: 100%;
        padding-top: 0px;
        height: 400px;
    }
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
    width: 85px;
    height: 85px;
    margin: auto 0px;
    padding-left: 50px;
    z-index: 11;
    @media (max-width: 1200px) {
        
        padding-left: 0px;
    }
`
export const ArrowRightImgDiv = styled.div`
    width: 85px;
    height: 85px;
    margin: auto 0px;
    padding-right: 50px;
    z-index: 11;
    @media (max-width: 1200px) {
        margin-left: auto;
        padding-right: 0px;
        
    }
`
export const SlideshowDiv = styled.div`
    width: 800px;
    height: 450px;
    @media (max-width: 1200px) {
        position: absolute;
        max-width: 100%;
        min-height: 400px;
    }
`
