import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "./style";

export const Home = () => {
  const [usuarios, setUsuarios] = useState();

  async function buscarUsuarios() {
    const { data } = await axios.get(
      "https://banco-usuario-aula.onrender.com/usuarios"
    );
    setUsuarios(data);
  }

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <>
      <h1>Meus Usuários</h1>
      <Container>
        {usuarios &&
          usuarios.map((element) => (
            <Card to={`/edicao/${element.id}`} key={element.id}>
              <p>ID: {element.id}</p>
              <p>Nome: {element.nome}</p>
              <p>Email: {element.email}</p>
            </Card>
          ))}
      </Container>
    </>
  );
};
