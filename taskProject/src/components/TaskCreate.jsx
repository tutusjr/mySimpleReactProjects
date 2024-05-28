import { useState } from "react";
import PropTypes from "prop-types";

useState;
export default function TaskCreate({ create, task, onUpdate, updated }) {
  const [taskInput, setTaskInput] = useState(task ? task.taskInput : "");
  const [taskTextarea, setTaskTextarea] = useState(
    task ? task.taskTextarea : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUpdate) {
      updated(task.id, taskInput, taskTextarea);
    } else {
      create(taskInput, taskTextarea);
    }
    setTaskInput("");
    setTaskTextarea("");
  };

  return (
    <>
      {onUpdate ? (
        <form className="update-container">
          <div className="task-input-container">
            <label className="create" htmlFor="task">
              <h3>Taski guncelle</h3>
              <input
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="input"
                name="task"
                id="task"
                type="text"
              />
            </label>
          </div>
          <div className="task-input-container">
            <label className="create" htmlFor="desc">
              <h3>Descriptioni guncelle</h3>
              <textarea
                value={taskTextarea}
                onChange={(e) => setTaskTextarea(e.target.value)}
                className="input text"
                name="desc"
                id="desc"
              ></textarea>
            </label>
          </div>
          <button type="submit" onClick={handleSubmit} className="button edit-button">
            Guncelle
          </button>
        </form>
      ) : (
        <div className="form-container">
          <form className="create-container" onSubmit={handleSubmit}>
            <div className="task-input-container">
              <label className="create" htmlFor="task">
                <h2>Task</h2>
                <input
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  className="input"
                  name="task"
                  id="task"
                  type="text"
                />
              </label>
            </div>
            <div className="task-input-container">
              <label className="create" htmlFor="desc">
                <h2>Description</h2>
                <textarea
                  value={taskTextarea}
                  onChange={(e) => setTaskTextarea(e.target.value)}
                  className="input text"
                  name="desc"
                  id="desc"
                ></textarea>
              </label>
            </div>
            <button type="submit" className="button">
              Olustur
            </button>
          </form>
        </div>
      )}
    </>
  );
}

TaskCreate.propTypes = {
  create: PropTypes.func,
  task: PropTypes.object,
  onUpdate: PropTypes.func,
  updated: PropTypes.func,
  taskTextarea: PropTypes.string, // Add this line
};