import styled from "@emotion/styled";
import v1 from '../../../siteContent/v1.png'

export const HighlightDiv = styled.div`
    max-width: 1639px;
    min-height: 218px;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 1200px) {
        margin: 0px auto;
    }
`;

export const Brother1Div = styled.div`
    width: 550px;
    display: flex ;
    background: url(${v1}) ;
    border: 3px solid #BC9306;
    justify-content: space-between;
    @media (max-width: 1400px) {
        width: 550px;
        
    }
    @media (max-width: 1200px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const BroImg = styled.img`
    padding: 15px 15px;

`;
export const NameDiv = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 98vw;
`;

export const NameH2 = styled.h2`
    color: #FFFFFF;
    font-size: 32px;
    margin: 10px;
    @media (max-width: 1200px) {
        font-size: 24px
   }
`;

export const BrotherNameDiv = styled.div`
    
    margin: 20px;
    @media (max-width: 1200px) {
        margin: auto;
   }
`;

export const BrothersDiv = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-around;
   @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: center;
   }
`;

export const ImgDiv = styled.div`
    margin: auto;
`;
export const BroInfoDiv = styled.div`
    background: #FFFFFF;
    width: 300px;
    height: 110px;
    margin: auto 0px;
    border: 3px solid #990C22;
    text-align: center;
    color: #002855;
    font-size: 18px;
    @media (max-width: 1200px) {
        margin: auto auto 10px auto;
    }
`;

export const BroHighDiv = styled.div`
    font-size: 48px;
    text-align: center;
    color: #FFFFFF;
    @media (max-width: 1200px) {
        font-size: 36px;
        
   }
`;

export const BroH2 = styled.h2`
    margin: 0px;
    padding: 10px 0px;
    @media (max-width: 1200px) {
        font-size: 24px
   }
`