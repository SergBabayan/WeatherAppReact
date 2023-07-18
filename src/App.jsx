import React, { useState } from 'react';
import { Button } from '@mui/material';
import gif from './Images/gif1.gif';
import "./App.css"

function Modal() {
  const [open, neopen] = useState(false);

  const openn = () => {
    neopen(true);
  }

  const closed = () => {
    neopen(false);
  }

  return (
    <div>
      <Button onClick={openn} variant="contained">Click</Button>
      <hr />
      <div className={`modal ${open ? "open" : ""}`}>
        <div className="modal-content">
          <h1 className="h1">You opened the Modal</h1>
          <img src={gif} className='image1'/>
          <Button id="button2" onClick={closed} variant="outlined" color="primary">Close</Button>
        </div>
      </div>
    </div>
  )
}


export default Modal;