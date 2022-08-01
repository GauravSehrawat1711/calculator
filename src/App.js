import './App.css';
import NavBar from './NavBar';
import { useState } from 'react';

function App() {
  const [initial,setInitial]=useState("")
   
  const handleClick=(e)=>{
    setInitial(initial.concat(e.target?.name));
    
  
  }
  const allClear=()=>{
    setInitial("")
  } 
  const deleteNo=()=>{
    setInitial(initial?.slice(0,-1));
  }
  const cal=()=>{
    setInitial(eval(initial).toString())
  }
  const per=()=>{
    let temp=initial/100;
    setInitial(temp);
  }
  return (
    <div className="App">
     <NavBar/>
     <div className="main">
      <input type="text" className="diplay" value={initial} placeholder="0"/>
      <div className="buttons">
        
        <button  onClick={allClear}  className="btn Clear">AC</button>
        <button onClick={deleteNo}  className="btn back">Del</button>
        <button onClick={per}  name="%" className="btn percentage">%</button>
        <button onClick={handleClick}  name="/" className="btn divide">/</button>
        <button onClick={handleClick}  name="7" className="btn seven">7</button>
        <button onClick={handleClick} name="8" className="btn eight">8</button>
        <button onClick={handleClick} name="9" className="btn nine">9</button>
        <button onClick={handleClick} name="*" className="btn multiply">*</button>
        <button onClick={handleClick} name="4" className="btn four">4</button>
        <button onClick={handleClick} name="5" className="btn five">5</button>
        <button onClick={handleClick} name="6 " className="btn six">6</button>
        <button onClick={handleClick} name="-" className="btn minus">-</button>
        <button onClick={handleClick} name="1" className="btn one">1</button>
        <button onClick={handleClick} name="2" className="btn two">2</button>
        <button onClick={handleClick} name="3" className="btn three">3</button>
        <button onClick={handleClick} name="+" className="btn plus">+</button>
        <button onClick={handleClick} name="0" className="btn zero">0</button>
        <button onClick={handleClick} name="." className="btn point">.</button>
        <button onClick={cal} className="btn equal">=</button>
 
      </div>
     </div>
    </div>
  );
}

export default App;
