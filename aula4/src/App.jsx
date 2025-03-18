import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Lenguages } from "./pages/Lenguages";
import { Projects } from "./pages/Projects";
import { NotFoound } from "./pages/NotFound";
import { Course } from "./pages/Course";
import { GlobalStyles } from "./Utils/globalStyles";

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="sobre" element={<About />} />
						<Route path="cursos" element={<Courses />} />
						<Route path="curso/:id?" element={<Course />} />
						<Route path="linguagens" element={<Lenguages />} />
						<Route path="projetos" element={<Projects />} />
						<Route path="*" element={<NotFoound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
