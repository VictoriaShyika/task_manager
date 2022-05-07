import React, { useEffect, useState } from "react";
import TasksPage from "../../components/TasksPage";

export default function Home() {
  // const [someText, setSomeTesxt] = useState("");

  // useEffect(() => {
  //   fetch("/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSomeTesxt(data.text);
  //     });
  // }, []);

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container ">
          <div className="row d-flex justify-content-center py-5 h-100 ">
            {/* <div
              className="card-body  text-white bg-light"
            > */}
              <TasksPage />
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
