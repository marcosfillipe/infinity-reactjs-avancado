import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Desktop } from "./pages/Desktop";
import { Notebook } from "./pages/Notebook";
import { Phone } from "./pages/Phone";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="computador" element={<Desktop />} />
          <Route path="notebook" element={<Notebook />} />
          <Route path="telefone" element={<Phone />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
