import { useState } from "react";
import axios from "axios";
import "../styles/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("all fields are required");
    }
    const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("user already exists!");
    } else {
      const user = { username, email, password };
      axios.post("/users", user).then(alert("User created!"));
    }
  };

  return (
    <div className="container">
      <form className="form-container">
        <h1>Register User</h1>
        <label>
          <input
            type="text"
            placeholder="UserName:"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

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
        <button className="reg-btn" type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
