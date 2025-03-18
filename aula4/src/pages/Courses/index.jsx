import { Link } from "react-router-dom";
import { cursosDeProgramacao } from "../../mocks/cursos";

export const Courses = () => {
	return (
		<>
			<h2>Cursos</h2>
			<ul>
				{cursosDeProgramacao &&
					cursosDeProgramacao.map((element) => (
						<li key={element.id}>
							<Link to={`/curso/${element.id}`}>{element.nome}</Link>
						</li>
					))}
			</ul>
		</>
	);
};
