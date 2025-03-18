import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>

						<li>
							<Link to={"/cadastro"}>Cadastro</Link>
						</li>
						<li>
							<Link to={"/login"}>Login</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Direitos Reservados</p>
			</footer>
		</>
	);
};
