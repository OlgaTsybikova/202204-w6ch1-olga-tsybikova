import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";
import loadToDoActionThunk from "./redux/thunks/todosThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoActionThunk);
  }, [dispatch]);
  return (
    <>
      <ToDoList />
      <Form />
    </>
  );
}

export default App;
