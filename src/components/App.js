import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [divName ,setDivName] = useState();
  const [shapes ,setShapes] = useState([]);

  function addShape(){
    setShapes(<div className={divName}></div>);
  }

  function handleClick(e){
    console.log(e.target.value);
    setDivName(e.target.value);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select defaultValue="square" onClick={handleClick}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes}
      </div>
    </div>
  )
}


export default App;
