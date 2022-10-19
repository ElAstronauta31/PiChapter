import styled from "@emotion/styled";

export const AboutStyle = styled.div`
    width: 100%;
    position: relative;
`

export const MainContentAbout = styled.div`
    display: flex;
    width: 100%;
`

export const AboutMenu = styled.div`
    max-width: 33%;
    text-align: center;
    color: #FFFFFF;
    @media (max-width: 1200px) {
       display: none;
    }
`
export const AboutDropDown = styled.select`
    width: 100%;
    text-align: center;
    height: 50px;
    background: #002855;
    font-size: 24px;
    color: #FFFFFF;
    border: 3px solid #FFFFFF;
    border-top: none;
    @media (max-width: 1200px) {
        
    }
`
export const AboutDropDownDiv = styled.div`
    display: none;
    
    width: 100%;
    margin: auto;
    justify-content: space-around;
    @media (max-width: 1200px) {
        display: flex;
    }
`

export const AboutUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    
`;

export const AboutLi = styled.li`
    padding: 55px;
    text-align: center;
    font-size: 24px;
    color: #FFFFFF;
    &:hover {
        color: #990C22;
        cursor: pointer;
      }
    @media (max-width: 1200px) {
        font-size: 24px
    }
`;

export const Astyle = styled.a`
    display: block;
    text-decoration: none;
`;

export const RedDiv = styled.div`
    border-right: solid;
    border-right-width: 5px;
    border-right-color: #990C22;
`;

export const AboutH1 = styled.h1`
    font-size: 36px;
`

export const AboutTitleDiv = styled.div`
      padding-top: 6px;
`

export const AboutMenuHidden = styled.div`
      margin-top: 25px;
      display: none;
      @media (max-width: 1200px) {
        display: none;
      }
`

export const MenuSelectDiv = styled.div`
      margin: auto;
`;