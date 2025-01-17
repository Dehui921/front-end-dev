
import './App.css';
import { useState } from 'react'


//const board = [['','',''],['','',''],['','','']];


const DUMMY_BOARD = [['X', 'O', 'O'],
['O', 'X', 'O'],
['O', 'O', 'X'],
];


function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(num) {
    if(squares[num]){
      return;
    }

    const nextSquares = squares.slice();

    if (!xIsNext) {
      nextSquares[num] = 'O';
    } else {
      nextSquares[num] = 'X';
    }

    setSquares(nextSquares);
    setXIsNext((prevState) => {
      return !prevState;
    });
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="App">
      <div className="playGround">
        <div className="row">
          <div className="col">
            <button onClick={() => handleClick(1)}>{squares[1]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(2)}>{squares[2]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(3)}>{squares[3]}</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={() => handleClick(4)}>{squares[4]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(5)}>{squares[5]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(6)}>{squares[6]}</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={() => handleClick(7)}>{squares[7]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(8)}>{squares[8]}</button>
          </div>
          <div className="col">
            <button onClick={() => handleClick(9)}>{squares[9]}</button>
          </div>
        </div>
      </div>
      <div className="button">
        <p>{status}</p>
      </div>
    </div>
  );
}

export default App;


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}