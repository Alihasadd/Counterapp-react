import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
//ali
import { render } from '@testing-library/react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
//export const ThemeContext = createContext('null');

function App() {
const[counterNumber, setCounter] = useState(0);
const [userInput, currentInput] = useState('');
const [events, setEvent] = useState(0);
//Ali
//const[theme, setTheme] = useState('light')
//const toggleTheme = () => {
 // setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
//};

useEffect(() => {
  document.title = `Counter value is ${counterNumber}`
}, []);



//trying to input a value to the counter
function addCount(){
  if (userInput !=='') {
    setCounter(counterNumber + parseInt(userInput));// not sure how to tell this value where to be
    console.log(userInput)
    setEvent(events + 1 );
  }
}


function countClick(){
  setEvent(events + 1 );
  setCounter(counterNumber+1);
}

function countClickDown(){
  setEvent(events + 1 );
  setCounter(counterNumber-1);
}

function countClickReset(){
  setCounter(0);
}

//function addCount(){
 // setCounter(input.value);
//}

return(
 // <ThemeContext.Provider value={theme, setTheme}>
  <div>
    <h1>Calculated: {events}</h1>
    <span>{counterNumber}</span>

    <br/>

  <button onClick={countClick}>
    Add +1
  </button>
  
  <button onClick={countClickDown}>
    Sub -1
  </button>

  <button onClick={countClickReset}>
    Reset
  </button>
  {/*Alis changes */}

  <input type="text" value={userInput} onChange={(event) => {currentInput(event.target.value)}}>
  </input>
  <button onClick={addCount}>Add Value</button>

  <button >Dark/light mode</button>

{/*light/dark mode */}
  

  
  </div>

  
  //</ThemeContext.Provider>
)

}


export default App;
