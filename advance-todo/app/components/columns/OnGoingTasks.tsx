import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../TaskList";
import { removeTask, removeTask as removeOngoing, moveTaskToDone } from "../../redux/slices/onGoingSlice"
import { Play } from "lucide-react";

const OnGoingTasks: React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();
//const dispatch = useDispatch();
const onGoingTasks = useSelector((state: RootState) => state.onGoing.tasks);
return(
    <TaskList
        title="In Progress"
        tasks={onGoingTasks}
        onRemove={(id) => dispatch(removeOngoing(id))}
        onMove={(id) => dispatch(moveTaskToDone(id))}
        moveLabel="Complete"
        icon={<Play className="w-5 h-5" />}
        color="amber"
      />
    );
};
export default OnGoingTasks;