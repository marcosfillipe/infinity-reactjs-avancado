import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro";
import { Page404 } from "./pages/Page404";
import { Edicao } from "./pages/Edicao";
import { Login } from "./pages/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="cadastro" element={<Cadastro />} />
					<Route path="login" element={<Login />} />
					<Route path="edicao/:id" element={<Edicao />} />
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
