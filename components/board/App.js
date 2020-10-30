import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "../squares/index";

function App() {
  const [board, setboard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [XisNext, setXisNext] = useState("X");

  function handleClick(index) {
    setboard([...board.slice(0, index), XisNext, ...board.slice(index + 1)]);
    if (XisNext === "X") {
      setXisNext("O");
    } else {
      setXisNext("X")
    }
  }

  return (
    <div className="App">
      {board.map((item, index) => (
        <Button item={item} index={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;

//item is either null, X or 0 on the board 
//index is index from array

