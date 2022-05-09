import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    loadToDos: (toDos, action) => [...action.payload],
    addtoDo: (toDos, action) => [...toDos, action.payload],
    deleteToDo: (toDos, action) =>
      toDos.filter((toDo) => toDo.id !== action.payload),
    editToDo: (toDos, action) =>
      toDos.map((toDo) =>
        toDo.id === action.payload.id ? { ...action.payload } : { ...toDo }
      ),
  },
});

export const {
  loadToDos: loadToDosActionCreator,
  addtoDo: addtoDoActionCreator,
  deleteToDo: deleteToDoActionCreator,
  editToDo: editToDoActionCreator,
} = toDosSlice.actions;

export default toDosSlice.reducer;
