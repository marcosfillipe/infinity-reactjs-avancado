import axios from "axios";
import { useState } from "react";

export const Cadastro = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function cadastrarUsuario(e) {
    e.preventDefault();
    const novo_usuario = {
      nome: nome,
      email: email,
      senha_hash: senha,
    };
    const { data } = await axios.post(
      "https://banco-usuario-aula.onrender.com/usuarios",
      novo_usuario
    );
    alert(data.mensagem);
    setNome("");
    setEmail("");
    setSenha("");
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <fieldset>
          <legend>Caneco</legend>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <button>Enviar</button>
        </fieldset>
      </form>
    </>
  );
};
