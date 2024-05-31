import { useEffect, useContext} from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import TaskContext from '../context/TaskContext'


function App() {

 const {fetchTasks} = useContext(TaskContext)

  
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <TaskCreate />
      <TaskList />
    </>
  )
}

export default App
