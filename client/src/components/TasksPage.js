import React, { useContext } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import { AuthContext } from "../context";

const TasksPage = () => {
  const { addTask } = useContext(AuthContext);

  return (
    <div className="container" style={{ paddingTop: "57px" }}>
      {addTask && (
        <form
          className="p-3 bg-dark bg-opacity-75"
          style={{ borderRadius: "0.5rem" }}
        >
          <Input type="text" placeholder="Task Title" />
          <Textarea type="textarea" placeholder="Task Description" />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </div>
  );
};

export default TasksPage;
