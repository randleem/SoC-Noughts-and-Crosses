import React, { useState } from "react";
import "./App.css";
import Button from "./components/squares";

let nullList = [null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,];

function App() {
  
  const [board, setboard] = useState(nullList);
  const [XisNext, setXisNext] = useState("🤹");


  function calculateWinner(board){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }
  

  function handleClick(index) {
    const newBoard = [...board.slice(0, index), XisNext, ...board.slice(index + 1)];
    if (XisNext === "🤹") {
      setXisNext("🧎‍♀️");
    } else {
      setXisNext("🤹")
    }
    const winner = calculateWinner(newBoard)
    setboard(newBoard);
    console.log(winner);
    if (winner !==null){
      alert(`${winner} is the WINNER!!!`);
      setboard(nullList)
    }
  }

  

  return (
    <div className="grid-container">
      {board.map((item, index) => (
        <Button item={item} index={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;

//item is either null, X or 0 on the board 
//index is index from array