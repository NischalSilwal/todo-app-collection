import type React from "react"
import { Trash2, ArrowRight } from "lucide-react"
import { memo } from "react"

interface Task {
  id: string
  title: string
}

interface TaskListProps {
  title: string
  tasks: Task[]
  onRemove: (id: string) => void
  onMove?: (id: string) => void
  moveLabel?: string
  icon: React.ReactNode
  color: "slate" | "amber" | "emerald"
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onRemove, onMove, moveLabel, icon, color }) => {
  const colorClasses = {
    slate: {
      header: "bg-slate-50 text-slate-700 border-slate-200",
      badge: "bg-slate-100 text-slate-600",
      moveButton: "bg-amber-500 hover:bg-amber-600 focus:ring-amber-500",
    },
    amber: {
      header: "bg-amber-50 text-amber-700 border-amber-200",
      badge: "bg-amber-100 text-amber-600",
      moveButton: "bg-emerald-500 hover:bg-emerald-600 focus:ring-emerald-500",
    },
    emerald: {
      header: "bg-emerald-50 text-emerald-700 border-emerald-200",
      badge: "bg-emerald-100 text-emerald-600",
      moveButton: "",
    },
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className={`px-6 py-4 border-b ${colorClasses[color].header}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[color].badge}`}>
            {tasks.length}
          </span>
        </div>
      </div>
      <div className="p-6">
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <p className="text-slate-500 text-sm">No tasks yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="group bg-slate-50 hover:bg-slate-100 rounded-lg p-4 transition-all duration-200 border border-slate-200 hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-slate-800 font-medium flex-1 leading-relaxed">{task.title}</p>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {onMove && moveLabel && (
                      <button
                        onClick={() => onMove(task.id)}
                        className={`px-3 py-1.5 text-white rounded-md text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center gap-1 ${colorClasses[color].moveButton}`}
                      >
                        {moveLabel}
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      onClick={() => onRemove(task.id)}
                      className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(TaskList);