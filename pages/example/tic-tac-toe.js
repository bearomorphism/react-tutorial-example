import { useState } from "react";
import styles from "../../styles/TicTacToe.module.css";

const defaultBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

function Square({ value, handleClick }) {
  return (
    <div
      className={styles.square}
      onClick={handleClick}
    >
      {value}
    </div>
  );
}

export default function TicTacToe() {
  const [board, setBoard] = useState(defaultBoard);
  const [player, setPlayer] = useState("X");
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((row, x) => (
          <div className={styles.boardRow} key={x}>
            {row.map((value, y) => (
              <Square handleClick={() => {
                const newBoard = [...board];
                newBoard[x][y] = player;
                setBoard(newBoard);
                setPlayer(player === "X" ? "O" : "X");
              }} value={value} key={y} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
