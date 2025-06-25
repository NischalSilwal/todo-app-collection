import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
}

interface DoneState {
  tasks: Task[];
}

const initialState: DoneState = {
  tasks: [],
};

const doneSlice = createSlice({
  name: 'done',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = doneSlice.actions;
export default doneSlice.reducer;