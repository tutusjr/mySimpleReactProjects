import PropTypes from "prop-types";

import TaskCreate from "./TaskCreate";
import { useContext, useState } from "react";
import TaskContext from "../../context/TaskContext";

export default function TaskCreated({ task }) {

  const [edit, setEdit] = useState(false)

  const { deleteTask, editTaskByID } = useContext(TaskContext);
  const deleteClick = () => {
    // onDelete(task.id);
    deleteTask(task.id);
  };

  const updatedSubmit = (id, updatedTitle, updatedDesc) => {
    setEdit(false);
    // updatedParams(id,updatedTitle,updatedDesc);
    editTaskByID(id, updatedTitle, updatedDesc);
  };

  const editClick = () => {
    setEdit(!edit);
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
