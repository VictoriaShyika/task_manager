import React, { useContext, useEffect, useState } from "react";
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
  useEffect(() => {
    if (!addTask) {
      setEmptyTitle("");
      setEmptyDescription("");
    }
  }, [addTask]);

  const renderTaskLists = () => {
    const { tasks } = props;
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div
          className="card-col col-md-3 card text-white bg-transparent "
          key={id}
          style={{ borderRadius: "0" }}
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
    <div className="row task-page ">
      <div className="col-md-12 px-0">
        {addTask && (
          <form
            onSubmit={onCreateTask}
            className="p-3 mb-2 bg-dark bg-opacity-75 mb-2"
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
        <div className="card-group task-side">{renderTaskLists()}</div>
      </div>
    </div>
  );
};

export default TasksPage;
