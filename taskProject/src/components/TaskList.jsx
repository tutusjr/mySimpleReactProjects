import TaskCreated from "./TaskCreated";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";
export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list-container">
      {tasks.map((item, index) => (
        <TaskCreated key={index} task={item} />
      ))}
    </div>
  );
}
