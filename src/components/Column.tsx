import {
  faChevronLeft,
  faChevronRight,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "./Row";

export interface Props {
  index: number;
  board: ColumnInterface[];
  setBoard: (e: any) => void;
}

export interface ColumnInterface {
  title: string;
  rows: string[];
}

const Column = ({ index, board, setBoard }: Props) => {
  const _board: ColumnInterface[] = [...board];

  const moveRight = (column: number) => {
    if (column + 1 === board.length) {
      return;
    }
    const temp = _board[column];
    _board[column] = _board[column + 1];
    _board[column + 1] = temp;

    setBoard(_board);
  };

  const moveLeft = (column: number) => {
    if (column === 0) {
      return;
    }
    const temp = _board[column];
    _board[column] = _board[column - 1];
    _board[column - 1] = temp;

    setBoard(_board);
  };

   const addRow = (column: number, title = "") => {
    _board[column].rows.push(title);
    setBoard(_board);
  };

  const handleColumnTitle = (e: any) => {
    const _board = [...board];
    _board[index].title = e.target.value;

    setBoard(_board);
  };

  return (
    <div className="inner-card">
      <div className="column-arrow">
        <FontAwesomeIcon
          className={index === 0 ? "iconLength" : "icon"}
          onClick={() => moveLeft(index)}
          icon={faChevronLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className={index === board.length - 1 ? "iconLength" : "icon"}
          onClick={() => moveRight(index)}
          icon={faChevronRight}
        ></FontAwesomeIcon>
      </div>
      <input
        placeholder={`Column  ${index + 1}`}
        type="text"
        role="alert"
        className="columnInput"
        onChange={handleColumnTitle}
        value={board[index].title}
      />
      <div>
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="row-btn"
          onClick={() => addRow(index, "")}
        />
        {board[index].rows.map((row: string, i: number) => (
          <div key={i} className="row-inner">
            <Row row={i} column={index} board={board} setBoard={setBoard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
