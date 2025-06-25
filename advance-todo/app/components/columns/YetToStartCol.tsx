// src/components/columns/YetToStartCol.tsx
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import {
  removeTask as removeYetToStart,
  moveTaskToOngoing,
} from "@/app/redux/slices/yetToStartSlice"
import TaskList from "../TaskList";
import { Clock } from "lucide-react";

const YetToStartCol: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const yetToStartTasks = useSelector(
    (state: RootState) => state.yetToStart.tasks
  );

  return (
    <TaskList
      title="Yet to Start"
      tasks={yetToStartTasks}
      onRemove={(id) => dispatch(removeYetToStart(id))}
      onMove={(id) => dispatch(moveTaskToOngoing(id))}
      moveLabel="Start"
      icon={<Clock className="w-5 h-5" />}
      color="slate"
    />
  );
};

export default YetToStartCol;
