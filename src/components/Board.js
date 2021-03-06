import "./board.css";
import React from "react";
import Square from "./Square";
import { calculateWinner } from "../api/game";


export default function Board() {

  // const [squares, setSquares] = React.useState([
  //   null,null,null,
  //   null,null,null,
  //   null,null,null,
  // ]);
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [pandaIsNext, setPandaIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "The winner is " + winner;
  } else {
    status = pandaIsNext ? "Next player: 🐼" : "Next player: 🐶";
  }

  const handleClick = (index) => {
    //copy squares -- shallow copy / flache Kopie - si no le decimos start, end, va a empezar desde el principio...
    
    const squaresCopy = squares.slice();

    //modify value by index
    squaresCopy[index] = pandaIsNext ? "🐼" : "🐶";
    // squaresCopy[index] = "🐼";
    //set me the state
    setSquares(squaresCopy);
    setPandaIsNext(!pandaIsNext);
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board" >
        <Square value={squares[0]} onClick={() => handleClick(0)}/>
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}
