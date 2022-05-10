import React, { useContext, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import { AuthContext } from "../context";
import TasksList from "./TasksList";
import Error from "./UI/Error";

const TASKS_STATUSES = ["On Hold", "To Do", "In Progress", "Done"];

const TasksPage = (props) => {
  const { addTask, setAddTask } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyDescription, setEmptyDescription] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAddTask(false);
  };

  const onCreateTask = (e) => {
    e.preventDefault();
    setEmptyTitle(false);
    setEmptyDescription(false);

    if (title === "" || title == null) {
      setEmptyTitle("Please fill title field");
      return console.log("Please fill title field");
    } else if (description === "" || description == null) {
      setEmptyDescription("Please fill description field");
      return console.log("Please fill description field");
    }
    props.onCreateTask({ title, description });
    resetForm();
  };

  const renderTaskLists = () => {
    const { tasks } = props;
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div
          className="col-md-3 card text-white bg-dark bg-opacity-75"
          key={id}
        >
          <TasksList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onRemoveTask={props.onRemoveTask}
          />
        </div>
      );
    });
  };

  return (
    <div
      className="row"
      style={{
        padding: "57px",
        paddingLeft: "8%",
        paddingRight: "8%",
        paddingBottom: "5px",
        margin: "0",
      }}
    >
      <div className="col-md-12">
        {addTask && (
          <form
            onSubmit={onCreateTask}
            className="p-3 bg-dark bg-opacity-75 mb-1"
            style={{ borderRadius: "0.5rem" }}
          >
            <Input
              type="text"
              placeholder="Task Title"
              onChange={onTitleChange}
            />
            <Textarea
              type="textarea"
              placeholder="Task Description"
              onChange={onDescriptionChange}
            />
            {emptyTitle ? <Error>{emptyTitle}</Error> : ""}
            {emptyDescription ? <Error>{emptyDescription}</Error> : ""}

            <Button type="submit">Submit</Button>
          </form>
        )}
        <div className="card-group" style={{ borderRadius: "0.5rem" }}>
          {renderTaskLists()}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
