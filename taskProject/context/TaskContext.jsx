import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function TaskProvider({ children }) {
  
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);

  const createTask = (taskInput, taskTextarea) => {
    axios
      .post("http://localhost:3000/tasks", {
        taskInput,
        taskTextarea,
      })
      .then((response) => {
        console.log(response);
        const createdTasks = [...tasks, response.data];
        setTasks(createdTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteTask = (id) => {
    axios.delete("http://localhost:3000/tasks/" + id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTaskByID = (id, updatedTitle, updatedDesc) => {
    axios.put("http://localhost:3000/tasks/" + id, {
      id,
      taskInput: updatedTitle,
      taskTextarea: updatedDesc,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          taskInput: updatedTitle,
          taskTextarea: updatedDesc,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  const fetchTasks = () => {
    axios.get("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  };

  const updatedSubmit = (id, updatedTitle, updatedDesc) => {
    setEdit(false);
    // updatedParams(id,updatedTitle,updatedDesc);
    editTaskByID(id, updatedTitle, updatedDesc);
  };
  const editClick = () => {
    setEdit(!edit);
  };


  const sharedValuesAndMethods = {
    tasks,
    createTask,
    deleteTask,
    editTaskByID,
    fetchTasks,
    editClick,
    updatedSubmit,
    edit
  };
  return <TaskContext.Provider value={sharedValuesAndMethods}>{children}</TaskContext.Provider>;
}

export { TaskProvider };
export default TaskContext;
