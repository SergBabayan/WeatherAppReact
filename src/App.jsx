import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#fff");
  document.body.style.backgroundColor = color;
  const New = () => {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);

    const newcolor = `rgb(${num1}, ${num2}, ${num3})`;
    console.log(num1, num2, num3);
    document.body.style.transition = '1s ease';
    setColor(document.body.style.backgroundColor = newcolor);
  } 

  return(
    <div>
      <button onClick={New}>Click</button>
    </div>
  )
}

export default App;