import React from "react";

const TasksPage = () => {
  return (
    <div className="container" style={{background: "rgb(139, 185, 236)"}}>
        
      <div className="py-3 rounded">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-dark m-3">+</button>
          </div>
          <div className="col-md-10">
          <p className=" text-center text-uppercase">
              Add new task
            </p>
          </div>
        </div>
      </div>
      
      <form  className="m-3">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Task Title"
              />
            </div>

            <div className="input-group mb-3">
              <textarea
                type="text"
                className="form-control"
                placeholder="Task Description"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
    </div>
  );
};

export default TasksPage;
