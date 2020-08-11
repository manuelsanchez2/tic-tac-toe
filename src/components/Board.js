import "./board.css";
import React from "react";
import Square from "./Square";

export default function Board() {

  const [squares, setSquares] = React.useState([
    "🐼",null,"🐶",
    "🐶","🐶","🐼",
    "🐼",null,null,
  ]);

  const status = "Next player: 🐶";

  const handleClick = (index) => {
    alert("INDEX: " + index);
    setSquares(["🐼",null,"🐶","🐶","🐶","🐶","🐶",null,null,])
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
