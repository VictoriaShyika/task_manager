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
      <section className="vh-100 bg-primary bg-opacity-25" >
        <TasksPage />
      </section>
    </div>
  );
}
