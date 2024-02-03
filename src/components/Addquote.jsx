function Addquote() {
  return (
    <div className="addquote">
      <h6 className="addquote__text">Añadir nueva frase</h6>
      <form>
        Frase
        <input className="filter" type="text" />
        Personaje
        <input className="filter" type="text" />
      </form>
    </div>
  );
}

export default Addquote;
