import { useState } from "react";
import "./App.css";
import BoardGame from "./components/BoardGame";
import { TurnSection } from "./components/TurnSection";
import { WinAlert } from "./components/WinAlert";

const TURNS = {
  X: "x",
  O: "o",
};

const WIN_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null); //null no hay ganadores, false es empate, true hay ganador

  const checkWinner = (board) => {
    for (const winCondition of WIN_CONDITION) {
      const [a, b, c] = winCondition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; //retorno x u o
      }
    }
    return null;
  };

  const checkEndGame = (board) => {
    return board.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="main">
      <h1>Tic Tac Toe</h1>
      <BoardGame board={board} updateBoard={updateBoard} />
      <TurnSection turn={turn} handleReset={handleReset} />
      {winner !== null && (
        <WinAlert winner={winner} handleReset={handleReset} />
      )}
    </main>
  );
}

export default App;
