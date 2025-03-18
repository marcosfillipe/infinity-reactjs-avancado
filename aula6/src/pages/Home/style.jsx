import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 50px;
`;

export const Card = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: #f54242;
  padding: 20px;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  p {
    font-size: 32px;
  }
`;
