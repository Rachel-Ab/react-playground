const FirstName = (props)=> {
    return <span>{props.name[0].toUpperCase()+ props.name.slice(1)} </span>;
}
const LastName = (props)=> {
    return <span className='red-text'>{props.name.toUpperCase()} </span>;
}

class FirstName2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <span>{this.props.name[0].toUpperCase() + this.props.name.slice(1)} </span>;
    }
}
class LastName2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <span className='red-text'>{this.props.name.toUpperCase()} </span>;
    }
}

const helloWorld = <div>
    <p>Function</p>
    <FirstName name='rachel'/>
    <LastName name='abenzoar'/>
    <br/>
    <p>Class</p>
    <FirstName2 name='rachel'/>
    <LastName2 name='abenzoar'/>
</div>
ReactDOM.render(helloWorld, document.querySelector('#app'));
