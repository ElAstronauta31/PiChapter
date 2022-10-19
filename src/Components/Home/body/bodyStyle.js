import styled from "@emotion/styled";

export const BodyDiv = styled.div`
    max-width: 1639px;
    min-height: 218px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    
`;

export const MissionDiv = styled.div`
    width: 50%;
    border-color: #990C22;
    margin-right: 0px 50px 0px 20px;
    @media (max-width: 1200px) {
        margin: 20px 0px;
        width: 100%;
    }
`;

export const MissionP = styled.p`
    max-width: 600px;
    margin: auto;
    font-size: 22px;
    text-align: center;
    color: white;
    padding-right: 20px;
    @media (max-width: 1200px) {
        font-size: 18px;
        max-width: 500px;
        padding-right: 0px;
    }
`;

export const QuoteP = styled.p`
    max-width: 735px;
    min-height: 75px;
    margin: auto;
    font-size: 22px;
    text-align: center;
    padding-left: 20px;
    color: white;
    @media (max-width: 1200px) {
        font-size: 18px;
        min-height: 50px;
        max-width: 500px;
        padding-left: 0px;
    }
`;

export const QuoteDiv = styled.div`
    width: 50%;
    border-color: #990C22;
    margin: 0px 20px 0px 0px;
    @media (max-width: 1200px) {
        margin: 20px 0px;
        width: 100%;
    }
`;

export const QuoteH3 = styled.h3`
    color: #BC9306;
    text-align: right;
    max-width: 735px;
    margin: auto;
    font-size: 32px;
    @media (max-width: 1200px) {
        font-size: 24px;
        max-width: 500px;
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
`;

export const TitleH2 = styled.h2`
    color: #FFFFFF;
    font-size: 48px;
    margin: 0px 10px 20px 10px;
    text-align: center;
    @media (max-width: 1200px) {
        font-size: 36px;
    }
`;

export const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 98vw;
    margin: 20px;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const RedBorder = styled.div`
    
    @media (max-width: 1200px) {
        border: 3px solid #990C22;
        width: 300px;
        margin: auto;
    }
`;

export const RedBorderPC = styled.div`
        border: 3px solid #990C22;
        height: 125px;
        margin: 10px auto;
        align-self: center;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const QuoteDivCenter = styled.div `
    text-align: center;
    margin: auto;
`;