import { Link, Outlet } from "react-router-dom";
import {
	StyledHeader,
	StyledItemMenu,
	StyledListaMenu,
	StyledLogoSite,
} from "./styles";
import logo from "../assets/imgs/logo.png";
export const Layout = () => {
	return (
		<>
			<StyledHeader>
				<nav>
					<StyledListaMenu>
						<li>
							<StyledLogoSite src={logo} alt="logo site"></StyledLogoSite>
						</li>
						<li>
							<StyledItemMenu to={"/"}>Home</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/filmes"}>Filmes</StyledItemMenu>
						</li>
						<li>
							<StyledItemMenu to={"/series"}>Séries</StyledItemMenu>
						</li>
					</StyledListaMenu>
				</nav>
			</StyledHeader>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Site de Filmes Educativos</p>
				<p>Todos os direitos reservados.</p>
			</footer>
		</>
	);
};
