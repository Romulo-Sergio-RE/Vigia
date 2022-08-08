import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 137px;
  background: #075F1E;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ImgLogo = styled.img`
    width: 120px;
    height: 120px;
`;
export const ContainerNavegacao = styled.div`
   display: flex;
   width: 50%;
   justify-content:space-around;
`;
export const Li = styled.li`
    list-style-type:none ;
`;
export const Links = styled.a`
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    :hover{
        text-decoration:underline;
    }
`;