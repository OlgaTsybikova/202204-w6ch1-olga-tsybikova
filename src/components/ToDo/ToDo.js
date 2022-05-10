import { useDispatch } from "react-redux";
import { editToDoActionCreator } from "../../redux/features/toDos/toDosSlice";
import { deleteToDoActionThunk } from "../../redux/thunks/todosThunk";

const ToDo = ({ todo: { id, name, done } }) => {
  const dispatch = useDispatch();
  const deleteToDo = () => {
    dispatch(deleteToDoActionThunk(id));
  };

  const changeDone = (event) => {
    const done = event.target.checked;
    dispatch(editToDoActionCreator({ id, name, done }));
  };

  return (
    <>
      <h2>{name}</h2>
      {done ? <p>DONE!</p> : <p>PENDING</p>}
      <input type="checkbox" onChange={changeDone} checked={done} />
      <button onClick={deleteToDo}>DELETE</button>
    </>
  );
};

export default ToDo;
