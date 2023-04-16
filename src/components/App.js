import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [divName ,setDivName] = useState('square');
  const [shapes ,setShapes] = useState([]);
  const [shapeCount, setShapeCount] =useState(0);
  function addShape(){
    let newDiv = ( <div className={divName}>{shapeCount}</div>);
    setShapeCount(shapeCount + 1);
    setShapes([...shapes, newDiv]);
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
        {shapes.map((shape, index) => shape)}
      </div>
    </div>
  )
}
export default App;









