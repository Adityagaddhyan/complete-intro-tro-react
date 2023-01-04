import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found!</h1>
      ) : (
        pets.map((p) => <Pet {...p} key={p.id} />)
      )}
    </div>
  );
};
export default Results;
