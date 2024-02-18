import PropTypes from "prop-types";

function Filters({ filterQuote, selectedCharacter, handleFilter }) {
  const handleInputCharacter = (event) => {
    handleFilter("character", event.currentTarget.value);
  };
  const handleInputQuote = (event) => {
    handleFilter("quote", event.currentTarget.value);
  };
  return (
    <div className="filters">
      <form className="filters__quote">
        Filtrar por frase{" "}
        <input
          className="filter"
          type="text"
          value={filterQuote}
          onChange={handleInputQuote}
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
          onChange={handleInputCharacter}
        >
          <option value="Todos">Todos</option>
          <option value="Joey">Joey</option>
          <option value="Ross">Ross</option>
          <option value="Mónica">Monica</option>
          <option value="Rachel">Rachel</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
        </select>
      </form>
    </div>
  );
}

Filters.propTypes = {
  filterQuote: PropTypes.string,
  selectedCharacter: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default Filters;
