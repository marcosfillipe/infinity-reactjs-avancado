import { Outlet } from "react-router-dom";
import {
	StyledContainerPrincipal,
	StyledFooter,
	StyledHeader,
	StyledItemMenu,
	StyledListaMenu,
	StyledMarca,
} from "./style";

export const Layout = () => {
	return (
		<>
			<StyledHeader>
				<StyledMarca>Meu Portfólio</StyledMarca>
				<nav>
					<StyledListaMenu>
						<li>
							<StyledItemMenu to={"/"}>Início</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/sobre"}>Sobre</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/cursos"}>Cursos</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/linguagens"}>Linguagens</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/projetos"}>Projetos</StyledItemMenu>
						</li>
					</StyledListaMenu>
				</nav>
			</StyledHeader>
			<StyledContainerPrincipal>
				<Outlet />
			</StyledContainerPrincipal>
			<StyledFooter>
				<p>Portfólio De Desenvolvimento Front-End</p>
				<p>Todos os direitos reservados.</p>
			</StyledFooter>
		</>
	);
};
