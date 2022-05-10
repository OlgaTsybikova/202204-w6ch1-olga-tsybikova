import axios from "axios";
import {
  deleteToDoActionCreator,
  loadToDosActionCreator,
} from "../features/toDos/toDosSlice";

export const loadToDoActionThunk = () => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const toDos = await response.json();
  dispatch(loadToDosActionCreator(toDos));
};

export const deleteToDoActionThunk = (id) => async (dispatch) => {
  const { data: todo } = await axios.delete(`${process.env.REACT_APP_API_URL}`);
  dispatch(deleteToDoActionCreator(todo));
};
