import React from "react";

const TASKS_STATUSES = ["On Hold", "To Do", "In Progress", "Done"];

const Task = (props) => {
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }
  function onRemoveTask() {
    props.onRemoveTask(props.task.id);
  }
  return (
    <div className="task mb-1">
      <div className="d-flex justify-content-end mx-1 p-1">
        <div className="dropdown mx-3">
          <button
            className="btn btn_drop text-white dropdown-toggle py-0"
            data-bs-toggle="dropdown"
          >
            {props.task.status}
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuDark"
          >
            {TASKS_STATUSES.map((status) => (
              <li key={status}>
                <button
                  className="dropdown-item"
                  value={status}
                  onClick={onStatusChange}
                >
                  {status}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="btn-close btn-close-white "
          aria-label="Close"
          onClick={() => onRemoveTask(props.task.id)}
        ></button>
      </div>
      <div className="px-2 pb-2">
        <h3 className="card-title mt-0 text-uppercase px-2">
          {props.task.title}
        </h3>
        <p className="card-text mb-3 px-2">{props.task.description}</p>
      </div>
    </div>
  );
};

export default Task;
