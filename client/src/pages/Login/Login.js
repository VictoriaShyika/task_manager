import React, { useState, useContext } from "react";
import Button from "../../components/UI/Button";
import Error from "../../components/UI/Error";
import Form from "../../components/UI/Form";
import Input from "../../components/UI/Input";
import { AuthContext } from "../../context";
import "./Login.css";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const [error, setError] = useState("");

  const handleClick = () => {
    setEmptyEmail(false);
    setEmptyPassword(false);
    setError("");

    if (email === "" || email == null) {
      setEmptyEmail("Please fill email field");
      return console.log("Please fill email field");
    } else if (password === "" || password == null) {
      setEmptyPassword("Please fill password field");
      return console.log("Please fill password field");
    }

    const opts = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    console.log(opts);
    fetch("http://127.0.0.1:8000/login", opts)
      .then((resp) => {
        console.log(resp)
        return resp.json();
      })
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("token", data.token);
          setIsAuth(true);
          console.log(">>>> Token after login", data.token);
        } else {
          setError(data.error_message);
          console.log(">>>> Error when login", data.error_message);
        }
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
      <Form>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {emptyEmail ? <Error>{emptyEmail}</Error> : ""}
        {emptyPassword ? <Error>{emptyPassword}</Error> : ""}
        {error ? <Error>{error}</Error> : ""}

        <Button type="submit" onClick={handleClick}>
          Login
        </Button>
      </Form>
  );
}
