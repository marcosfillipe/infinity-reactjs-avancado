export const Card = ({ item }) => {
  return (
    <div className="card">
      <h2>{item.nome}</h2>
      <p>Marca: {item.marca}</p>
      <p>Preço: R${item.preco}</p>
    </div>
  );
};
