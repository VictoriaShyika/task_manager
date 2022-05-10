import React, { useEffect, useState } from "react";
import TasksPage from "../../components/TasksPage";
import { connect } from "react-redux";
import { createTask, removeTask, editTask } from "../../actions";

function Home(props) {
  // const [someText, setSomeTesxt] = useState("");

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSomeTesxt(data.text);
  //     });
  // }, []);

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };

  return (
    <div>
      <section className="min-vh-100 bg-primary bg-opacity-25">
        <TasksPage
          tasks={props.tasks}
          onStatusChange={onStatusChange}
          onCreateTask={onCreateTask}
          onRemoveTask={onRemoveTask}
        />
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(Home);
