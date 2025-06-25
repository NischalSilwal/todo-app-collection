"use client"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import TaskColumn from "./components/TaskColumn"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AddTask />
        <TaskColumn />
      </main>
    </div>
  )
}

export default Home