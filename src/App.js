import React, { useState } from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import Box from './components/Box';
import Switch from '@mui/material/Switch';
import { SketchPicker } from 'react-color'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#fff');
  const [inset, setInset] = useState(false);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleChange = (color, event) => {
    setColor(color.hex);
  };

  return (
    <>
      <div className="app">
        <div className="app__controls">
          <div className="app__controlsContainer">
            <h1>
              Box Shadow Generator
            </h1>
            <div className="app__control">
              <p style={{ marginRight: "25px", marginBottom: "5px" }}>X:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setX(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={x} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "28px", marginBottom: "5px" }}>Y:</p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setY(value)} style={{ marginLeft: "20px" }} />
              <input type="text" value={y} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "30px", marginBottom: "5px" }}>Blur:</p>
              <Slider min={0} max={400} onChange={(event, value) => setBlur(value)} />
              <input type="text" value={blur} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "0px", marginBottom: "5px" }}>Spread:  </p>
              <Slider min={-200} max={200} defaultValue={0} onChange={(event, value) => setSpread(value)} />
              <input type="text" value={spread} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <div className="app__control">
              <p style={{ marginRight: "15px", marginBottom: "5px" }}>Inset:  </p>
              <Switch {...label} onChange={(event, value) => setInset(value)} />
              <input type="text" value={inset} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
            </div>
            <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
        <Box x={x} y={y} blur={blur} spread={spread} color={color} inset={inset} />
      </div>
      <h6>Created By @Aryan Garg &copy;2022</h6>
    </>
  )
}

export default App