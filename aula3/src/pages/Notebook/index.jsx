import { Container } from "../../components/Container";
import { notebooks } from "../../mocks/notebooks";

export const Notebook = () => {
  return (
    <>
      <h1>Notebook para o seu escritório</h1>
      <Container assunto={notebooks} />
    </>
  );
};
