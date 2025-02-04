import "./App.css";
import { produtos } from "./utils/itens";

function App() {
  

  return (
    <>
      <h1>Minha lojinha só a massa</h1>
      <section>
        {produtos.map((element) => (
          <div className="card" key={element.id}>
            <h2>{element.nome}</h2>
            <img
              width={200}
              src={element.imagemUrl}
              alt={`Foto de ${element.nome}`}
            />
            <p
              style={
                element.emOferta
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              R$ {element.preco}
            </p>
            {element.emOferta && (
              <p>R$ {element.preco - (element.preco / element.desconto)}</p>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default App;