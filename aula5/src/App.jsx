import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { Filmes } from "./pages/Filmes";
import { Series } from "./pages/Series";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./utils/globalStyles";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="filmes" element={<Filmes />} />
						<Route path="series" element={<Series />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
