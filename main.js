function App(props) {
  const [state, setState] = React.useState({
    firstname: "",
    text: "",
    flavor: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Le nom a été soumis : " +
        state.firstname +
        "\nUn essai a été envoyé : " +
        state.text +
        "\nVotre parfum favori est : " +
        state.flavor
    );
    setState({ firstname: "", text: "", flavor: "" });
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="firstname"
            value={state.firstname}
            placeholder="name"
            onChange={handleChange}
          />
        </label>
        <label>
          Essay:
          <textarea
            name="text"
            value={state.text}
            placeholder="enter your text"
            onChange={handleChange}
          />
        </label>
        <label>
          Choisissez votre parfum favori :
          <select onChange={handleChange} name="flavor" value={state.flavor}>
            <option value="">--Please choose an option--</option>
            <option value="grapefruit">Pamplemousse</option>
            <option value="lime">Citron vert</option>
            <option value="coconut">Noix de coco</option>
            <option value="mango">Mangue</option>
          </select>
        </label>
        <input type="submit" value="Envoyer" />
      </form>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
