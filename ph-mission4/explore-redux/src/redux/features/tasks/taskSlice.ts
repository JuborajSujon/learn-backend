import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "asdfasdfasf",
      title: "Initialize frontend",
      description: "create home page and routing",
      dueDate: "2022-01-01",
      priority: "High",
      isCompleted: false,
    },
  ],

  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilteredTasks = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
