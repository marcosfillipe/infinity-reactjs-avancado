import "./App.css";
import { veiculos } from "./utils/itens";

function App() {
  const sedans = veiculos.filter((element) => element.tipo === "Sedan");
  const hatchs = veiculos.filter((element) => element.tipo === "Hatch");
  const suvs = veiculos.filter((element) => element.tipo === "SUV");

  return (
    <>
      <h1>Nome da loja.</h1>
      <h2>Sedans</h2>
      <section>
        {sedans.map((element) => (
          <div
            className={`card ${
              element.disponivel ? "disponivel" : "indisponivel"
            }`}
            key={element.id}
          >
            <img
              width={200}
              src={element.imagemUrl}
              alt={`Foto do carro ${element.marca} ${element.modelo}`}
            />
            <h3>
              {element.marca} {element.modelo}
            </h3>
            <p>
              Ano: {element.ano} | R$ {element.preco} | {element.quilometragem}
              Km
            </p>
          </div>
        ))}
      </section>

      <h2>Hatch</h2>
      <section>
        {hatchs.map((element) => (
          <div
            className={`card ${
              element.disponivel ? "disponivel" : "indisponivel"
            }`}
            key={element.id}
          >
            <img
              width={200}
              src={element.imagemUrl}
              alt={`Foto do carro ${element.marca} ${element.modelo}`}
            />
            <h3>
              {element.marca} {element.modelo}
            </h3>
            <p>
              Ano: {element.ano} | R$ {element.preco} | {element.quilometragem}
              Km
            </p>
          </div>
        ))}
      </section>

      <h2>SUV</h2>
      <section>
        {suvs.map((element) => (
          <div
            className={`card ${
              element.disponivel ? "disponivel" : "indisponivel"
            }`}
            key={element.id}
          >
            <img
              width={200}
              src={element.imagemUrl}
              alt={`Foto do carro ${element.marca} ${element.modelo}`}
            />
            <h3>
              {element.marca} {element.modelo}
            </h3>
            <p>
              Ano: {element.ano} | R$ {element.preco} | {element.quilometragem}
              Km
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;