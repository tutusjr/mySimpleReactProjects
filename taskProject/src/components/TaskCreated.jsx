import PropTypes from "prop-types";

import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TaskContext from "../../context/TaskContext";

export default function TaskCreated({ task }) {
  const { deleteTask, editClick, edit, updatedSubmit } = useContext(TaskContext);
  const deleteClick = () => {
    // onDelete(task.id);
    deleteTask(task.id);
  };
  return (
    <div className="task-show">
      {edit ? (
        <>
          <TaskCreate task={task} onUpdate={editClick} updated={updatedSubmit} />
        </>
      ) : (
        <>
          <div className="show-title-container">
            <h3>Task</h3>
            <p className="input">{task.taskInput}</p>
          </div>
          <div className="show-title-container">
            <h3>Description</h3>
            <p className="input textarea">{task.taskTextarea}</p>
          </div>
          <div className="button-container">
            <button className="task-button" onClick={deleteClick}>
              Sil
            </button>
            <button className="task-button update-button" onClick={editClick}>
              Guncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
}

TaskCreated.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func,
  updatedParams: PropTypes.func,
};
