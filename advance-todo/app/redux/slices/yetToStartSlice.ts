import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@/app/store';
import { addTask as addTaskToOngoing } from './onGoingSlice';

interface Task {
  id: string;
  title: string;
}

interface YetToStartState {
  tasks: Task[];
}

const initialState: YetToStartState = {
  tasks: [],
};

const yetToStartSlice = createSlice({
  name: 'yetToStart',
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

export const { addTask, removeTask } = yetToStartSlice.actions;

export const moveTaskToOngoing = (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const task = getState().yetToStart.tasks.find((task) => task.id === id);
  if (task) {
    dispatch(removeTask(id));
    dispatch(addTaskToOngoing(task));
  }
};

export default yetToStartSlice.reducer;