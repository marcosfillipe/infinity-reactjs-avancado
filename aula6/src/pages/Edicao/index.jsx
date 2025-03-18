import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edicao = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function buscarUsuario() {
    const { data } = await axios.get(
      `https://banco-usuario-aula.onrender.com/usuarios/${id}`
    );
    setUsuario(data);
    console.log(data);
  }

  useEffect(() => {
    buscarUsuario();
  }, []);

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome);
      setEmail(usuario.email);
      setSenha(usuario.senha_hash);
    }
  }, [usuario]);

  const navigate = useNavigate();

  async function editarUsuario(e) {
    e.preventDefault();
    const usuario_editado = {
      nome: nome,
      email: email,
      senha_hash: senha,
    };
    const { data } = await axios.put(
      `https://banco-usuario-aula.onrender.com/usuarios/${id}`,
      usuario_editado
    );
    alert("Usuário Atualizado com sucesso");
    setNome("");
    setEmail("");
    setSenha("");
    navigate("/");
  }

  async function deletarUsuario() {
    const { data } = await axios.delete(
      `https://banco-usuario-aula.onrender.com/usuarios/${id}`
    );
    alert("Usuário deletado com sucesso");
    navigate("/");
  }
  return (
    <>
      <h1>Editar</h1>
      {usuario && (
        <form onSubmit={editarUsuario}>
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
            <button>Salvar</button>
            <button type="button" onClick={deletarUsuario}>
              Excluir
            </button>
          </fieldset>
        </form>
      )}
    </>
  );
};
