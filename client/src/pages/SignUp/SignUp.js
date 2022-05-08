import React, { useState, useContext } from "react";
import Button from "../../components/UI/Button";
import Error from "../../components/UI/Error";
import Form from "../../components/UI/Form";
import Input from "../../components/UI/Input";
import { AuthContext } from "../../context";

export default function SignUn() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const handleClick = () => {
    setEmptyName(false);
    setEmptyEmail(false);
    setEmptyPassword(false);

    if (name === "" || name == null) {
      setEmptyEmail("Please fill name field");
      return console.log("Please fill name field");
    } else if (email === "" || email == null) {
      setEmptyPassword("Please fill email field");
      return console.log("Please fill email field");
    } else if (password === "" || password == null) {
      setEmptyPassword("Please fill password field");
      return console.log("Please fill password field");
    }

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
        if (data.success) {
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
    <Form>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
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
      {emptyName ? <Error>{emptyName}</Error> : ""}
      {emptyEmail ? <Error>{emptyEmail}</Error> : ""}
      {emptyPassword ? <Error>{emptyPassword}</Error> : ""}

      <Button type="submit" onClick={handleClick}>
        Sign In
      </Button>
    </Form>
  );
}
