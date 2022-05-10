import React, { useEffect, useState } from "react";

export default function Home() {
  const [someText, setSomeTesxt] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/home")
      .then((response) => response.json())
      .then((data) => {
        setSomeTesxt(data.text);
      });
  }, []);

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div
              className="card-body bg-dark text-white text-center"
              style={{ borderRadius: "0.5rem" }}
            >
              {someText}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
