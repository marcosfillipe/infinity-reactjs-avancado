import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cursosDeProgramacao } from "../../mocks/cursos";

export const Course = () => {
	const { id } = useParams();
	const [curso, setCurso] = useState();

	useEffect(() => {
		cursosDeProgramacao.forEach((element) => {
			if (element.id === +id) {
				setCurso(element);
			}
		});
	}, []);

	return (
		<>
			{curso && (
				<section>
					<h2>{curso.nome}</h2>
					<img
						width={200}
						src={curso.foto}
						alt={`Foto do curso ${curso.nome}`}
					/>
					<p>{curso.descricao}</p>
					<p>Duração: {curso.duracao}</p>
				</section>
			)}
		</>
	);
};
