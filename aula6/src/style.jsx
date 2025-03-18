import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: #f54242;
  padding: 20px;
  border-radius: 20px;
  p {
    font-size: 32px;
  }
`;
