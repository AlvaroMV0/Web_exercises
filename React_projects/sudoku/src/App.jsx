export default function App() {
  return (
    board()
  );
}

function board() {
  return (
    <div className="board">
      {smaller_board(1)}
      {smaller_board(2)}
      {smaller_board(3)}
      {smaller_board(4)}
      {smaller_board(5)}
      {smaller_board(6)}
      {smaller_board(7)}
      {smaller_board(8)}
      {smaller_board(9)}
    </div>
  );
}

function smaller_board(x) {
  return (
    <div className={`medium_cell ${x}`}>
      <div className={`smaller_cell ${x}`} id="1"></div>
      <div className={`smaller_cell ${x}`} id="2"></div>
      <div className={`smaller_cell ${x}`} id="3"></div>
      <div className={`smaller_cell ${x}`} id="4"></div>
      <div className={`smaller_cell ${x}`} id="5"></div>
      <div className={`smaller_cell ${x}`} id="6"></div>
      <div className={`smaller_cell ${x}`} id="7"></div>
      <div className={`smaller_cell ${x}`} id="8"></div>
      <div className={`smaller_cell ${x}`} id="9"></div>
    </div>
  );
}