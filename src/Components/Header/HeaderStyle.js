import styled from "@emotion/styled";

/* Header Style */

export const HeaderDiv = styled.div`
    background: #FFFFFF;
    position: relative;
    display: flex;
    width: 100%;
    height: 125px;
    color: #002855;
    font-size: 24px;
    @media (max-width: 768px) {
        height: 100px;
    }
`;

export const HeaderImg = styled.img`
    width: 85px;
    height: 74.5px;
    @media (max-width: 768px) {
        width: 60px;
        height: 52.59px;
    }
`;

export const MenuImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    @media (min-width: 769px) {
        display: none;
    }
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
      @media (max-width: 1200px) {
        display: none;
    }
`;

export const HeaderTitleShort = styled.div`
    margin: auto 0px auto 20px;
    &:hover {
        cursor: default;
      }
      @media (min-width: 1200px) {
        display: none;
    }
`;

export const HeaderRightDiv = styled.div`
    display: flex;
    margin: auto 0px auto auto;
`;

export const HeaderUl = styled.ul`
    list-style-type: none;
    @media (max-width: 768px) {
        display: none;
    }
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