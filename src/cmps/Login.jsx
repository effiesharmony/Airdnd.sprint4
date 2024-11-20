import { useState } from "react"
import { useNavigate, useLocation } from "react-router"
// import { userService } from '../services/user/user.service.js'
import { userService } from "../services/user"
import { login } from "../store/actions/user.actions.js"

export function Login({ setIsLoggedIn }) {
  const [credentials, setCredentials] = useState(userService.getEmptyUser())
  const navigate = useNavigate()

  async function onLogin(credentials) {
    try {
      const user = await login(credentials)
      console.log("User logged in:", user)
      navigate("/stay")
    } catch (err) {
      console.log("Login: err in login user", err)
    }
  }

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onLogin(credentials)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <section>
        <span className="required-ast">* </span>
        <label htmlFor="username">Username</label>
      </section>
      <input
        className="user-name"
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        required
      />
      <section>
        <span className="required-ast">* </span>
        <label htmlFor="password">Password</label>
      </section>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <button className="cta" type="submit">Login</button>

      <button className="demo-login-btn">
        Demo login
      </button>
      <button className="signup-btn">
        Sign up
      </button>
    </form>
  )
}
