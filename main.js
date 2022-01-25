function UserGreeting(props) {
  return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
  return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting() {
  const [isLoggedIn, setLogin] = React.useState(false);

  const log = () => {
    setLogin(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <React.Fragment>
          <UserGreeting />
          <button onClick={log}>Logout</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <GuestGreeting />
          <button onClick={log}>Login</button>
        </React.Fragment>
      )}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("app"));
