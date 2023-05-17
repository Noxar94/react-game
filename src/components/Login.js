import "../styles/login.css";

const Login = () => {
  return (
    <div className="container">
      <form className="form-container">
        <h1>Login User</h1>
        <label>
          <input type="text" placeholder="UserName:" required />
        </label>

        <label>
          <input type="password" placeholder="Password:" required />
        </label>
        <button className="Login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
