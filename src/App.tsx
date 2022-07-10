import "./App.css";
import { useLocalState } from "./hooks/useLocalStorage";
import Columns from "./components/Columns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [board, setBoard] = useLocalState("board", []);

  const addColumn = () => {
    setBoard([
      ...board,
      {
        title: "",
        rows: [],
      },
    ]);
  };

  return (
    <div className="App">
      <h1 data-test-id="title" className="title">Kanban Board System</h1>
      <div className="main">
        <div className="card">
          <Columns board={board} setBoard={setBoard} />
        </div>
        <div>
          <FontAwesomeIcon
            title="icon"
            icon={faPlusSquare}
            className="btn"
            onClick={addColumn}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
