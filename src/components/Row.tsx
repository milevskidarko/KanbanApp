import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColumnInterface } from "./Column";

interface Props {
  row: number;
  column: number;
  board: ColumnInterface[];
  setBoard: (e: any) => void;
}

const Row = ({ row, column, board, setBoard }: Props) => {
  const handleRowTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _board = [...board];
    _board[column].rows[row] = e.target.value || "";

    setBoard(_board);
  };

  const move = {
    right: (column: number) => {
      const _board = [...board];
      if (column === board.length - 1) {
        return;
      }
      const temp = _board[column].rows[row];
      _board[column].rows.splice(row, 1);
      _board[column + 1].rows.push(temp);

      setBoard(_board);
    },
    left: (column: number) => {
      const _board = [...board];
      if (column === 0) {
        return;
      }
      const temp = _board[column].rows[row];
      _board[column].rows.splice(row, 1);
      _board[column - 1].rows.push(temp);

      setBoard(_board);
    },
    up: (column: number) => {
      const _board = [...board];

      if (row === 0) {
        return;
      }
      const temp = _board[column].rows[row];
      _board[column].rows[row] = _board[column].rows[row - 1];
      _board[column].rows[row - 1] = temp;

      setBoard(_board);
    },
    down: (column: number) => {
      const _board = [...board];
      if (board[column].rows.length - 1 === row) {
        return;
      }
      const temp = _board[column].rows[row];
      _board[column].rows[row] = _board[column].rows[row + 1];
      _board[column].rows[row + 1] = temp;

      setBoard(_board);
    },
  };

  return (
    <div className="row">
      <div className="movement">
        <div></div>
        <div>
          <FontAwesomeIcon
            className={row === 0 ? "iconLength" : "arrow-btn"}
            onClick={() => move.up(column)}
            icon={faChevronUp}
          />
        </div>
        <div></div>

        <div>
          <FontAwesomeIcon
            className={column === 0 ? "iconLength" : "arrow-btn"}
            onClick={() => move.left(column)}
            icon={faChevronLeft}
          />
        </div>
        <div></div>
        <div>
          <FontAwesomeIcon
            onClick={() => move.right(column)}
            className={column === board.length - 1 ? "iconLength" : "arrow-btn"}
            icon={faChevronRight}
          />
        </div>

        <div></div>
        <div>
          <FontAwesomeIcon
            className={
              board[column].rows.length - 1 === row ? "iconLength" : "arrow-btn"
            }
            onClick={() => move.down(column)}
            icon={faChevronDown}
          />
        </div>
        <div></div>
      </div>

      <div>
        <input
          placeholder="Enter title here"
          type="text"
          className="inputRow"
          onChange={handleRowTitle}
          value={board[column].rows[row]}
        />
      </div>
    </div>
  );
};

export default Row;
