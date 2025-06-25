"use client"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../store"
import { addTask } from "../redux/slices/yetToStartSlice"
import { useState } from "react"
import { Plus } from "lucide-react"
import { memo } from "react";

const AddTask: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(addTask({ id: crypto.randomUUID(), title: newTaskTitle }))
      setNewTaskTitle("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask()
    }
  }

  return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-emerald-600" />
            Add New Task
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-black"
            />
            <button
              onClick={handleAddTask}
              disabled={!newTaskTitle.trim()}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        </div>
      </div>
  )
}

export default memo(AddTask)