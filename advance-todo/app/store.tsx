import { configureStore } from "@reduxjs/toolkit";
import yetToStartReducer from "./redux/slices/yetToStartSlice";
import onGoingReducer from "./redux/slices/onGoingSlice";
import doneReducer from "./redux/slices/doneSlice";

export const store = configureStore({
  reducer: {
    yetToStart: yetToStartReducer,
    onGoing: onGoingReducer,
    done: doneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;