import styled from "@emotion/styled";

export const MenuDiv = styled.div`
    width: 200px;
    height: 225px;
    position: absolute;
    right: 0%;
    z-index: 11;
    background: #FFFFFF;
    border: 2px solid #990C22;
    display: none;
    @media (max-width: 765px) {
        display: none;
    }
`;
export const MenuListDiv = styled.div`
    
`;

export const MenuUl = styled.ul`
    list-style-type: none;
    font-weight: normal;
`;
export const MenuLi = styled.li`
    margin: 20px 0px;
    font-size: 24px;
    text-align: left;
    &:hover {
        color: #990C22;
      }
    &:visited {
        text-decoration: none;
    }
`;
export const HeaderMenuDiv = styled.div`
    display: inline;
    
`;

export const MenuHolder = styled.div`

`;