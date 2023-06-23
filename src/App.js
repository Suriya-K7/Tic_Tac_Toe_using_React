import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  let [square, setSquare] = useState(Array(9).fill(null));
  let [player, setPlayer] = useState(true);
  const handleClick = (i) => {
    if (square[i] || winner) return;
    let newSquare = square.slice();
    newSquare[i] = player ? "X" : "O";
    setSquare(newSquare);
    setPlayer(!player);
  };
  const checkDraw = (square) => {
    let count = 0;
    for (let i = 0; i < square.length; i++) {
      if (square[i]) {
        count++;
      }
    }
    if (count === square.length) {
      return true;
    } else {
      return false;
    }
  };
  const checkWinner = (square) => {
    let pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < pattern.length; i++) {
      let [a, b, c] = pattern[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };
  let winner = checkWinner(square);
  let draw = checkDraw(square);
  let status;
  if (winner) {
    status = `Player ${winner} won the game`;
  } else if (draw && !winner) {
    status = "Game Draw";
  } else {
    status = player ? "X it's Turn" : "O it's Turn";
  }

  return (
    <div className="App">
      <div className="result">{status}</div>
      <div className="row">
        <Button value={square[0]} onClick={() => handleClick(0)} />
        <Button value={square[1]} onClick={() => handleClick(1)} />
        <Button value={square[2]} onClick={() => handleClick(2)} />
        <Button value={square[3]} onClick={() => handleClick(3)} />
        <Button value={square[4]} onClick={() => handleClick(4)} />
        <Button value={square[5]} onClick={() => handleClick(5)} />
        <Button value={square[6]} onClick={() => handleClick(6)} />
        <Button value={square[7]} onClick={() => handleClick(7)} />
        <Button value={square[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default App;
