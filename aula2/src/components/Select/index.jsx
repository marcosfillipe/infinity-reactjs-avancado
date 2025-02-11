export const SelectComponent = ({ opcoes, mudou }) => {
	return (
		<select onChange={mudou}>
			{opcoes &&
				opcoes.map((element) => (
					<option value={element.valor}>{element.texto}</option>
				))}
		</select>
	);
};
