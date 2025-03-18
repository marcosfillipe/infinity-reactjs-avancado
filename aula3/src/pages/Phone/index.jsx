import { Container } from "../../components/Container";
import { celulares } from "../../mocks/celulares";

export const Phone = () => {
  return (
    <>
      <h1>Smartphones na promoção</h1>
      <Container assunto={celulares} />
    </>
  );
};
