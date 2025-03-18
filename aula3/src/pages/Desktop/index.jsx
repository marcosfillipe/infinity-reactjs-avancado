import { Container } from "../../components/Container";
import { computadores } from "../../mocks/computadores";

export const Desktop = () => {
  return (
    <>
      <h1>Computadores Gamers</h1>
      <Container assunto={computadores} />
    </>
  );
};
