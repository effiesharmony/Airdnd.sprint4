import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
// import { userService } from '../services/user/user.service.js'
import { userService } from "../services/user";
import { login } from "../store/actions/user.actions.js";

export function Login({ setIsLoggedIn }) {
  const [credentials, setCredentials] = useState(userService.getEmptyUser());
  const navigate = useNavigate();

  async function onLogin(credentials) {
    try {
      const user = await login(credentials);
      console.log("User logged in:", user);
      navigate("/stay");
    } catch (err) {
      console.log("Login: err in login user", err);
    }
  }

  function handleChange({ target }) {
    const { name: field, value } = target;
    setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    onLogin(credentials);
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        className="user-name"
        type="text"
        name="username"
        value={credentials.username}
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
