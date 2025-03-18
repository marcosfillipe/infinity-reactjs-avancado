import { Card } from "../Card";

export const Container = ({ assunto }) => {
  return (
    <section className="container">
      {assunto && assunto.map((element) => <Card item={element} />)}
    </section>
  );
};
