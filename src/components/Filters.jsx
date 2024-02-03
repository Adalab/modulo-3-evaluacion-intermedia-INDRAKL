function Filters({ handlefilterQuote }) {
  const handleInput = (event) => {
    console.log(event.currentTarget.value);

    handlefilterQuote(event.currentTarget.value);
  };
  return (
    <div className="filters">
      <form className="filters__quote">
        Filtrar por frase{" "}
        <input className="filter" type="text" onInput={handleInput} />
      </form>
      <form
        action="/procesar_formulario"
        method="post"
        className="filters__characters"
      >
        <label htmlFor="personajes">Filtrar por personaje</label>
        <select id="opciones" name="opcion">
          <option>Todos</option>
          <option>Joe</option>
          <option>Ross</option>
          <option>Mónica</option>
          <option>Rachel</option>
          <option>Phoebe</option>
          <option>Chandler</option>
        </select>
      </form>
    </div>
  );
}
export default Filters;
