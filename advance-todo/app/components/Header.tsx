import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { memo } from "react";

const Header: React.FC = () => {
  const yetToStartTasks = useSelector((state: RootState) => state.yetToStart.tasks,);
  const onGoingTasks = useSelector((state: RootState) => state.onGoing.tasks,);
  const doneTasks = useSelector((state: RootState) => state.done.tasks,);

  const totalTasks = yetToStartTasks.length + onGoingTasks.length + doneTasks.length
  const ongoingTask = onGoingTasks.length
  const completionRate = totalTasks > 0 ? Math.round((doneTasks.length / totalTasks) * 100) : 0

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Task Manager</h1>
          <div className="flex justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span className="font-medium text-slate-700">Total: {totalTasks}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium text-emerald-700">OnGoing Task: {ongoingTask}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium text-emerald-700">Completed: {completionRate}%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)