// import logo from './logo.svg';
import './App.css';

function App() {

  const names = ['Jony', 'Rony', 'Atha Ullah', 'Mobin']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99'},
    { name: 'PDF Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name={names[0]} job='Footballer'></Person>
        <Person name={names[1]} job='Cricketer'></Person>
        <Person name={names[2]} job='Programmer'></Person>
        <Person name={names[3]} job='Nutreshonist'></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid yellow',
    width: '400px',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h2>My name: {props.name}</h2>
      <h3>Profession: {props.job}</h3>
    </div>
  );
}

export default App;
