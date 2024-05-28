import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

  const [createArray, setCreateArray] = useState([])

  const createTask = (taskInput, taskTextarea) => {
    const createdTasks = [...createArray, {
      id: Date.now(),
      taskInput,
      taskTextarea
    }
  ];
  setCreateArray(createdTasks);
  }

  const deleteTask = (id) => {
    setCreateArray(createArray.filter((task) => task.id !== id))
  }

  const editTaskByID = (id, updatedTitle, updatedDesc) => {
    const updatedTask = createArray.map((task) => {
      if(task.id === id) {
        return {
          id,
          taskInput: updatedTitle,
          taskTextarea: updatedDesc
        }}
      return task; 
      });
      setCreateArray(updatedTask); 
  }

  return (
    <>
      <TaskCreate create={createTask}/>
      <TaskList tasks={createArray} onDelete={deleteTask} updatedParams={editTaskByID} />
    </>
  )
}

export default App
