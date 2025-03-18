import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/computador"}>Computadores</Link>
            </li>

            <li>
              <Link to={"/notebook"}>Notebooks</Link>
            </li>

            <li>
              <Link to={"/telefone"}>Celulares</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="principal">
        <Outlet />
      </main>

      <footer className="rodape">
        <p>© Todos os Direitos Reservados</p>
      </footer>
    </>
  );
};
