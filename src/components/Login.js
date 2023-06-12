import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // check user if email exists
  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user.email === email && user.password === password) return user;
  };

  //handle submit.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // both fields required
    if (email === "" || password === "") {
      alert("all fields are required");
      return;
    }

    // get user, error if no user
    const user = await axios
      .get("/users")
      .then((res) => checkUser(res.data, email, password))
      .catch((error) => {
        console.log(error);
      });

    // if logged in navigate, if not alert inc.
    if (user && user.email === email && user.password === password) {
      navigate("/user");

      localStorage.setItem("user", JSON.stringify(user.id));
      window.location.reload();
    } else {
      alert("Wrong email or password! try again");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form className="form-container">
        <h1>Login User</h1>
        <label>
          <input
            type="text"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="Login-btn" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
