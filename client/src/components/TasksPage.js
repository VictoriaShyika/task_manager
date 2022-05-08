import React from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";

const TasksPage = () => {
  return (
    <div className="container" style={{ background: "rgb(139, 185, 236)" }}>
      <div className="py-3 rounded">
        <div className="row">
          <div className="col-md-2">
            <Button className="btn btn-dark m-3">+</Button>
          </div>
          <div className="col-md-10">
            <p className=" text-center text-uppercase">Add new task</p>
          </div>
        </div>
      </div>

      <form className="m-3">
        <div className="input-group mb-3">
          <Input type="text" placeholder="Task Title" />
        </div>

        <div className="input-group mb-3">
          <Textarea type="textarea" placeholder="Task Description" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default TasksPage;
