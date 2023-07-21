import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#fff");
  document.body.style.backgroundColor = color;
  const New = () => {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);

    const newcolor = `rgb(${num1}, ${num2}, ${num3})`;
    console.log(num1, num2, num3);
    document.body.style.transition = '0.5s';
    setColor(document.body.style.backgroundColor = newcolor);
  } 

  return(
    <div>
      <Button style={{width: 100}} variant="contained" onClick={New}>Click</Button>
    </div>
  )
}

export default App;