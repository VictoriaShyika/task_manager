import React from "react";
import Task from "./Task";

const TasksList = (props) => {
  return (
    <div>
      <div className="card-header text-uppercase text-center fw-bold bg-dark text-white">
        {props.status}
      </div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={props.onStatusChange}
          onRemoveTask={props.onRemoveTask}
        />
      ))}
    </div>
  );
};

export default TasksList;
