import styled from "@emotion/styled";

export const AboutUsDiv = styled.div`
    display: flex; 
    flex: 1 1 67%;
    @media (max-width: 957px) {
        position: relative;
        flex-direction: column;
     }
`

export const MissionFactsDiv = styled.div`
    flex: 1.5;
    font-size: 24px;
    color: #FFFFFF;
    @media (max-width: 957px) {
        font-size:18px;
        max-width: 450px;
     }
`

export const PillarsMainDiv = styled.div`
    flex: 1;
    text-align: center;
    @media (max-width: 957px) {
        font-size: 24px;
        max-width: 450px;
     }
`

export const MissionDiv = styled.div`
    text-align: center;
    max-width: 670px;
    margin: 0px 50px 0px 50px;
    @media (max-width: 957px) {
        margin: 10px;
     }
`
export const MissionP = styled.p`
     margin:0px;
     
`;



export const FactsDiv = styled.div`
    margin: 50px;
    @media (max-width: 957px) {
        margin: 0px 10px 0px 0px;
        
     }
`

export const AboutUsUl = styled.ul`
    list-style-type: none;
    padding: 0px auto;
    @media (max-width: 445px) {
        padding: 0px 0px 0px 25px;
        
     }
    
`;

export const PillarImg = styled.img`
    border-radius: 150px;
`

export const PillarsDiv = styled.div`
    
`
export const PillarDiv = styled.div`
    padding: 15px;
    font-size: 24px;
`

export const PillarColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    
`
export const PillarRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

export const DonH3 = styled.h3`
    margin: 0;
    color: #FFFFFF;
`
export const NameH3 = styled.h3`
    margin: 0;
    color: #BC9306;
`

export const Lista = styled.a`
    color:  #BC9306;
`

export const PillarH2 = styled.h2`
    font-size: 36px;
    color: #FFFFFF;
`

export const RedBorder = styled.div`
    
    @media (max-width: 957px) {
        border: 3px solid #990C22;
        width: 300px;
        margin: 20px auto;
    }
`;