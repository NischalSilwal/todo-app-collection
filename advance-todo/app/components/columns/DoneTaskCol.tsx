import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import TaskList from "../TaskList";
import { removeTask as removeDone } from "../../redux/slices/doneSlice";
import { CheckCircle } from "lucide-react"; 

const DoneTaskCol: React.FC = () => {
  const dispatch = useDispatch();
  const doneTasks = useSelector((state: RootState) => state.done.tasks);

  return (
    <TaskList
      title="Completed"
      tasks={doneTasks}
      onRemove={(id) => dispatch(removeDone(id))}
      icon={<CheckCircle className="w-5 h-5" />}
      color="emerald"
    />
  );
};

export default DoneTaskCol;
