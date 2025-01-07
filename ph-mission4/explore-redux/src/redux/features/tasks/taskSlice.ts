import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "asdfasdfasf",
      title: "Initialize frontend",
      description: "create home page and routing",
      dueDate: "2022-01-01",
      priority: "High",
      isCompleted: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
