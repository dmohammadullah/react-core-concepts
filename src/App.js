import logo from './logo.svg';
import './App.css';

function App() {
  
  const names = ['Jony','Rony','Atha Ullah','Mobin']
  return (
    <div className="App">
      <header className="App-header">
        <Person name={names[0]} job='Footballer'></Person>
        <Person name={names[1]} job='Cricketer'></Person>
        <Person name={names[2]} job='Programmer'></Person>
        <Person name={names[3]} job='Nutreshonist'></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle ={
    border:'2px solid yellow',
    width:'400px',
    margin:'10px'
  }
  return(
    <div style={personStyle}>
      <h2>My name: {props.name}</h2>
      <h3>Profession: {props.job}</h3>
    </div>
  );
}

export default App;
