import styled from "@emotion/styled";
import v1 from "../../siteContent/v1.png"

export const BrotherGridDiv = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-template-rows: Auto;
    margin: 0px 75px 100px 75px;
    gap: 50px;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
`

export const BrotherItemDiv = styled.div`
    font-size: 18px;
    text-align: center;
    
    width: 300px;
`

export const BrothersDiv = styled.div`
    text-align: center;
    color: #FFFFFF;
    
`

export const BroImg = styled.img`
    padding: 15px 0px;
    
    
`
export const BroH2 = styled.h2`
    font-size: 20px;
    margin: 0px;
    padding: 10px 0px;
`

export const BroH1 = styled.h1`
    font-size: 48px;
`

export const BroImgDiv = styled.div`
    background: url(${v1}) ;
    border: 3px solid #BC9306;
`

export const BroH2Div = styled.div`
    background:  ;
`