import { Square } from "./Square";
export default function BoardGame({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((a, index) => {
        return (
          <div className="square" key={index}>
            <Square updateBoard={updateBoard} value={index}>
              {board[index]}
            </Square>
          </div>
        );
      })}
    </section>
  );
}
