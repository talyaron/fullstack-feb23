import { useState } from "react";

import "./App.scss";
//create a circle, and by using a color picker, when a colour is picked, change the color of the circle
function App() {
  const [color, setColor] = useState("#bbb");
  const changeColor = () => {
    const newColor = prompt("please select a color");
    if (newColor === null) alert("you have to select a color");
    else setColor(newColor);
  };
  const changeColorByListener = (ev: any) => {
    setColor(ev.target.classList[1]);
  };

  return (
    <>
      <div className="circle" style={{ backgroundColor: `${color}` }}></div>
      <button onClick={changeColor}>
        Change the color of the circle by typing the hex code
      </button>
      <p>or click on one of the circles</p>
      <div className="colorPicker">
        <div className="square beige" onClick={changeColorByListener}></div>
        <div className="square red" onClick={changeColorByListener}></div>
        <div className="square black" onClick={changeColorByListener}></div>
        <div className="square yellow" onClick={changeColorByListener}></div>
        <div className="square green" onClick={changeColorByListener}></div>
        <div className="square purple" onClick={changeColorByListener}></div>
        <div className="square pink" onClick={changeColorByListener}></div>
        <div className="square orange" onClick={changeColorByListener}></div>
        <div className="square aqua" onClick={changeColorByListener}></div>
      </div>
    </>
  );
}

export default App;
