import ToDoData from "../../ToDoData";
import ToDo from "../ToDo/ToDo";

const ToDoList = () => {
  const toDos = ToDoData;
  return (
    <div className="todo-section">
      <ul className="todo-list">
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDo todo={toDo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
