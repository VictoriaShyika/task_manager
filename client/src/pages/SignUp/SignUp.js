import React, { useState, useContext } from "react";
import { AuthContext } from "../../context";

export default function SignUn() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    fetch("/signup", opts)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
          setIsAuth(true);
          console.log(">>>> Token after login", data.token);
        } else {
        //   setError(data.error);
          console.log(">>>> Error when login", data.error);
        }
      })
      .catch((error) => console.error("There was an error!", error));
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body px-5 py-5 text-center">
                <div className="mb-md-2 mt-md-2">
                <div className="form-white mb-4">
                    <input
                      className="form-control form-control-lg bg-dark text-white"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                    />
                  </div>
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
                      className={
                        "form-control form-control-lg bg-dark text-white"
                      }
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
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
