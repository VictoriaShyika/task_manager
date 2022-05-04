import React, { useState, useContext } from "react";
import { AuthContext } from "../../context";
import "./Login.css";

export default function Login(){
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch("/login", opts)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else alert("There has been some error");
      })
      .then((data) => {
        setIsAuth(true);
        sessionStorage.setItem("token", data.token);
        console.log(data.token);
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>
                    <div className="form-white mb-4">
                      <input
                        className="form-control form-control-lg bg-dark text-white"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-white mb-4">
                      <input
                        className="form-control form-control-lg bg-dark text-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleClick}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
