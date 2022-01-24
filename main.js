//const helloWorld = React.createElement('h1', {}, 'Hello world!');

/* const helloWorld = <h1>Hello world!</h1>; */

const lastName = 'abenzoar';
const firstName = 'rachel';

const UpperCase = (props) => {
    return props.string.toUpperCase();
};

const firstUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const display = (
    <div>
    {/* <h1>{upperCase('hello')}</h1> */}
    <UpperCase string="My naMe Is "/>
    <span id='firstName'>{firstName.charAt(0).toUpperCase() + firstName.slice(1)} </span>
    <p>{firstUpperCase(firstName)}</p>
    <span id='lastName'>{lastName.toUpperCase()}</span>
    </div>
   
)
ReactDOM.render(display, document.querySelector('#app'));
