import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@/app/store';
import { addTask as addTaskToDone } from './doneSlice';

interface Task {
  id: string;
  title: string;
}

interface OnGoingState {
  tasks: Task[];
}

const initialState: OnGoingState = {
  tasks: [],
};

const onGoingSlice = createSlice({
  name: 'onGoing',
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

export const { addTask, removeTask } = onGoingSlice.actions;

export const moveTaskToDone = (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const task = getState().onGoing.tasks.find((task) => task.id === id);
  if (task) {
    dispatch(removeTask(id));
    dispatch(addTaskToDone(task));
  }
};

export default onGoingSlice.reducer;