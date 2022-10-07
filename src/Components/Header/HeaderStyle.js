import styled from "@emotion/styled";

/* Header Style */

export const HeaderDiv = styled.div`
    background: #FFFFFF;
    display: flex;
    height: 125px;
    color: #002855;
    font-size: 24px;
    font-weight: bold;
`;

export const HeaderImg = styled.img`
    width: 85px;
    height: 74.51px;
`;

export const HeaderLeftDiv = styled.div`
    display: flex;
    margin: auto 20px;
`;

export const HeaderTitle = styled.div`
    margin: auto 0px auto 20px;
    &:hover {
        cursor: default;
      }
`;

export const HeaderRightDiv = styled.div`
    display: flex;
    margin: auto 0px auto auto;
`;

export const HeaderUl = styled.ul`
    list-style-type: none;
    
`;

export const HeaderLi = styled.li`
    float: left;
    display: block;
    padding: 20px;
    text-align: center;
    &:visited {
        text-decoration: none;
    }
    &:hover {
        color: #990C22;
        cursor: pointer;
      }
`;

export const HeaderA = styled.a`
    
`;