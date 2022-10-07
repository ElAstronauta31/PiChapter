import styled from "@emotion/styled";

export const AboutStyle = styled.div`
    display: flex;
    width: 100vw;
    height: 87.25vh;
`

export const AboutMenu = styled.div`
    min-width: 31.25%;
    text-align: center;
    color: #FFFFFF;
`
export const AboutUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
`;

export const AboutLi = styled.li`
    padding: 55px;
    text-align: center;
    font-size: 30px;
    color: #FFFFFF;
    &:hover {
        color: #990C22;
        cursor: pointer;
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