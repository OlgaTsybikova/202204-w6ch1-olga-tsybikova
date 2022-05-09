const ToDo = ({ todo: {id, name, done} }) => {
  return (
    <>
      <h2>Id:{id} - Name: {name}</h2>
      {done && <p>DONE!</p>}
    </>
  );
};

export default ToDo;
