function FetchingCard() {
  const [card, setCard] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setCard(json));
  }, []);
  return (
    <div className='card'>
      {card.map((user) => {
        return (
          <div>
            <Cards user={user} />
          </div>
        );
      })}
    </div>
  );
}
function Cards(props) {
  const { user } = props;
  return (
    <ul className="list">
      <li key={user.usename}>Name : {user.name}</li>
      <li key={user.usename}>Email : {user.email}</li>
      <li key={user.usename}>Phone : {user.phone}</li>
      <li key={user.usename}>Website : {user.website}</li>
      <li key={user.usename}>Company : {user.company.name}</li>
    </ul>
  );
}
ReactDOM.render(<FetchingCard />, document.querySelector("#app"));