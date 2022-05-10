import { loadToDosActionCreator } from "../features/toDos/toDosSlice";

const loadToDoActionThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const toDos = response.json();
  dispatch(loadToDosActionCreator(toDos));
};
export default loadToDoActionThunk;
