import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #bb86d7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

export const StyledMarca = styled.h1`
  color: #182e4d;
  font-size: 40px;
  font-style: italic;
`;

export const StyledListaMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const StyledItemMenu = styled(Link)`
  color: #182e4d;
  font-size: 24px;
  text-decoration: none;
`;

export const StyledContainerPrincipal = styled.main`
  background-color: #182e4d;
  height: 90vh;
  color: white;
`;

export const StyledFooter = styled.footer`
  background-color: #bb86d7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  flex-direction: column;
`;
