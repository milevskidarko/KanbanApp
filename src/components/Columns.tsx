import Column from "./Column";

const Columns = ({ board, setBoard }: any) => {
  return board?.map((column: any, index: number) => (
    <Column
      key={`column-${index}`}
      index={index}
      board={board}
      setBoard={setBoard}
    />
  ));
};

export default Columns;