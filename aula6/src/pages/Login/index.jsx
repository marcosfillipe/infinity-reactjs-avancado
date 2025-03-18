import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const navigate = useNavigate();

	async function loginSite(e) {
		e.preventDefault();
		const { data } = await axios.get(
			"https://banco-usuario-aula.onrender.com/usuarios"
		);

		console.log(data);
		console.log(email);
		console.log(senha);

		const busca = data.filter(
			(e) => e.email === email && e.senha_hash === senha
		);

		if (busca && busca.length > 0) {
			alert("Login com sucesso");
		} else {
			alert("erro");
		}
		navigate("/");
	}

	return (
		<>
			<h1>Login no Site</h1>
			<form onSubmit={loginSite}>
				<fieldset>
					<legend>Login</legend>
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
					<button>Login</button>
				</fieldset>
			</form>
		</>
	);
};
