import { Square } from "./Square";

export const WinAlert = ({ winner, handleReset }) => {
  return (
    <section className="sectionWinner">
      <div className="divWinner">
        <h2>{winner === false ? "Draw" : "Winner:"}</h2>

        <header>
          {winner && (
            <>
              <div className="square">
                <Square>{winner}</Square>
              </div>
            </>
          )}
        </header>

        <footer>
          <button className="btnRestart" onClick={() => handleReset()}>
            Reset
          </button>
        </footer>
      </div>
    </section>
  );
};
