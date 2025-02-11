/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import "./App.css";
import { CardComponent } from "./components/Card";
import { SelectComponent } from "./components/Select";
import { especiesOp, generosOp, statusOp } from "./utils/opcoes";
function App() {
	const [personagens, setPersonagens] = useState();
	const [nome, setNome] = useState("");
	const [especie, setEspecie] = useState("");
	const [genero, setGenero] = useState("");
	const [status, setStatus] = useState("");

	async function buscarPersonagens() {
		const resposta = await fetch("https://rickandmortyapi.com/api/character");
		const dados = await resposta.json();
		setPersonagens(dados.results);
	}

	async function filtrarPersongens() {
		setPersonagens(null);
		const resposta = await fetch(
			`https://rickandmortyapi.com/api/character?name=${nome}&species=${especie}&gender=${genero}&status=${status}`
		);
		const dados = await resposta.json();
		setPersonagens(dados.results);
	}

	useEffect(() => {
		if (nome || genero || status || especie) {
			filtrarPersongens();
		} else {
			buscarPersonagens();
		}
	}, [nome, genero, status, especie]);

	return (
		<>
			<h1>Rick And Morty API</h1>
			<input
				placeholder="Digite o nome do Personagem"
				type="text"
				id="pesquisa"
				name="pesquisa"
				onChange={(event) => setNome(event.target.value)}
			/>

			<SelectComponent
				opcoes={especiesOp}
				mudou={(event) => setEspecie(event.target.value)}
			/>

			<SelectComponent
				opcoes={generosOp}
				mudou={(event) => setGenero(event.target.value)}
			/>

			<SelectComponent
				opcoes={statusOp}
				mudou={(event) => setStatus(event.target.value)}
			/>

			<section className="container">
				{personagens &&
					personagens.map((personagem) => (
						<CardComponent key={personagem.id} element={personagem} />
					))}
			</section>
		</>
	);
}

export default App;
