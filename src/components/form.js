import { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountName: "",
      email: "",
      password: "",
      submittedData: [],
    };
  }

  handleAccountName = (event) => {
    // Handle accountname event value!
    this.setState({
      accountName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    // Handles the Email event value
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    // Handles the password event value
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    const { accountName, email, password } = this.state;
    return (
      <main className="main-form">
        <form className="form-container">
          <label>AccountName:</label>
          <input
            type="text"
            value={accountName}
            onChange={this.handleAccountName}
            required
          />

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={this.handleEmailChange}
            required
          />
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={this.handlePasswordChange}
            required
          />
          <button type="submit">Submit</button>
          <a className="register-link" href=" ">
            Register a new account
          </a>
        </form>
      </main>
    );
  }
}
export default Form;
