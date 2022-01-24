/* function Clock(props) {
    return (
        <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }

    function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('app')
    );
}
setInterval(tick, 1000); */

/* class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }
    componentDidMount(){
        this.timerId = setInterval(()=> this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState({date: new Date()})
    }
    
    render(){
        return(
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>  
            </div>
        ) 
    }  
}

    ReactDOM.render(
        <Clock />,
        document.getElementById('app')
    );
 */

    const Clock2 = () => {
        const [date, setDate] = React.useState(new Date());
        React.useEffect(()=> {
            tick();
        },[date])

        const tick = () =>{
            setInterval(()=>  setDate(new Date(), 1000)
           )
        }

        return(
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {date.toLocaleTimeString()}.</h2>  
            </div>
        )
    }

    ReactDOM.render(
        <Clock2 />,
        document.getElementById('app')
    );