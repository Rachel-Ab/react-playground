const App = (props) => {
  const [decimale, setDecimale] = React.useState('');
  const [binaire, setBinaire] = React.useState('');

  const handleChange = (base, value) => {
    switch(base) {
      case "binaire":
        setDecimale(parseInt(value, 2).toString(10))
        setBinaire(value);
        break;
      case "decimale":
        setBinaire(parseInt(value, 10).toString(2))
        setDecimale(value);
        break;
    }
  };
  return (
    <React.Fragment>
      <label>
        Valeur décimale
        <BaseNumberInput base="decimale" onChangeBase={handleChange} number={decimale}/>
      </label>
      <label>
        Valeur binaire
        <BaseNumberInput base="binaire" onChangeBase={handleChange} number={binaire}/>
      </label>
    </React.Fragment>
  );
};

const BaseNumberInput = ({base, number, onChangeBase}) => {
  const [num, setNum] = React.useState("");

  const handleChange = (e) => {
    onChangeBase(base, e.target.value)
  };
  return (
    <div>
      <input type="number" name="number" value={number} onChange={handleChange} />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#app"));
