/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [couleur, setCouleur] = React.useState('black')
    const currentValue = React.useRef()

    const tick = () => {
        currentValue.current = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    const colorBlack = () => {
        setCouleur('black');
    }
    const randomColor = () => {
        setCouleur('#'+Math.floor(Math.random()*16777215).toString(16))
    }
    
    const stopClock = (e) => {
        console.log('stop');
        e.preventDefault();
        clearInterval(currentValue.current)
    }
    const resetClock = (e) => {
        console.log('reset');
        e.preventDefault();
        tick();
    }
    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: couleur}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={randomColor}>Change color</button>
            <button onClick={colorBlack}>Initial color</button>
            <button onClick={stopClock}>Stop Clock </button>
            <button onClick={resetClock}>Restart Clock </button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





