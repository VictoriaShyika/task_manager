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
    <>
      <div className="d-flex justify-content-between mx-1 my-1">
        <form onChange={onStatusChange}>
          <select className="form-select-sm bg-dark text-white fw-bold" defaultValue={props.task.status}>
            {TASKS_STATUSES.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </form>
        <button
          type="button"
          className="btn-close btn-close-white "
          aria-label="Close"
          onClick={() => onRemoveTask(props.task.id)}
        ></button>
      </div>
      <div className="px-2" style={{ borderBottom: "solid gray 1px" }}>
        <h3 className="card-title mt-3 text-uppercase px-2" >
          {props.task.title}
        </h3>
        <p className="card-text mb-3 fw-bold px-2">{props.task.description}</p>
      </div>
    </>
  );
};

export default Task;
