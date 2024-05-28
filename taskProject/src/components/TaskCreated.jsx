import PropTypes from "prop-types";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskCreated({ task, onDelete, updatedParams }) {
  const [edit, setEdit] = useState(false);
  const deleteClick = () => {
    onDelete(task.id);
  };

  const handleSubmit = (id,updatedTitle,updatedDesc) => {
    setEdit(false);
    updatedParams(id,updatedTitle,updatedDesc);
  }

  const editClick = () => {
    setEdit(!edit);
  };
  console.log(edit)
  return (
    <div className="task-show">
      {edit ? (
        <>
          <TaskCreate task={task} onUpdate={true} updated={handleSubmit}/>
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
  updatedParams: PropTypes.func
};
