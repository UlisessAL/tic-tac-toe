export const TurnSection = ({ turn, handleReset }) => {
  return (
    <section>
      <div>
        <h2>Es el turno de: {turn}</h2>
        <button className="btnRestart" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </section>
  );
};
