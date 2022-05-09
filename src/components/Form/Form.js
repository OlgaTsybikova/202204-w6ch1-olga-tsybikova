import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoDoActionCreator } from "../../redux/features/toDos/toDosSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [done, setDone] = useState(false);

  const changeName = (event) => setName(event.target.value);
  const changeId = (event) => setId(event.target.value);
  const changeDone = (event) => setDone(event.target.value);

  const addToDo = (event) => {
    event.preventDefault();
    dispatch(addtoDoActionCreator({ id: id, name: name, done: done }));
  };

  return (
    <>
      <label htmlFor="id">Id:</label>
      <input type="number" id="id" onChange={changeId}></input>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" onChange={changeName}></input>
      <label htmlFor="done">Done:</label>
      <input type="checkbox" id="done" onChange={changeDone}></input>
      <button type="submit" onClick={addToDo}>
        ADD
      </button>
    </>
  );
};

export default Form;
