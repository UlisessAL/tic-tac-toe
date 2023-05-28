// eslint-disable-next-line react/prop-types
export function Square({ children, updateBoard, value }) {
  const handleClick = () => {
    updateBoard(value);
  };

  return (
    <>
      <div className="value" onClick={handleClick}>
        {children}
      </div>
    </>
  );
}
