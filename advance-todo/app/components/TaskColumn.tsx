import TaskList from "./TaskList"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "@/app/store"
import { removeTask as removeYetToStart,moveTaskToOngoing,} from "../redux/slices/yetToStartSlice"
import { Clock, Play, CheckCircle } from "lucide-react"
import { memo } from "react"
import DoneTaskCol from "./columns/DoneTaskCol"
import OnGoingTasks from "./columns/OnGoingTasks"
import YetToStartCol from "./columns/YetToStartCol"

const TaskColumns: React.FC = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <YetToStartCol/>
      <OnGoingTasks/>
     <DoneTaskCol/>
    </div>
  )
}

export default memo(TaskColumns)