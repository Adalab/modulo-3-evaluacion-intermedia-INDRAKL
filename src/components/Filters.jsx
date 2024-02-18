import React from "react";

function Filters({
  filterQuote,
  selectedCharacter,
  handleFilterQuote,
  handleCharacterChange,
}) {
  return (
    <div className="filters">
      <form className="filters__quote">
        Filtrar por frase{" "}
        <input
          className="filter"
          type="text"
          value={filterQuote}
          onChange={(event) => handleFilterQuote(event.target.value)}
        />
      </form>
      <form
        action="/procesar_formulario"
        method="post"
        className="filters__characters"
      >
        <label htmlFor="personajes">Filtrar por personaje</label>
        <select
          id="opciones"
          name="opcion"
          value={selectedCharacter}
          onChange={handleCharacterChange}
        >
          <option value="Todos">Todos</option>
          <option value="Joe">Joe</option>
          <option value="Ross">Ross</option>
          <option value="Mónica">Mónica</option>
          <option value="Rachel">Rachel</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
        </select>
      </form>
    </div>
  );
}

export default Filters;
