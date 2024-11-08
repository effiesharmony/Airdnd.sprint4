import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { userService } from '../services/user'
import { login } from '../store/actions/user.actions.js'

export function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const navigate = useNavigate()

    async function onLogin(ev) {
        ev.preventDefault()
        if (!credentials.username && !credentials.password) return
        await login(credentials)
        navigate('/stay')
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }
    
    return (
        <form className="login-form" onSubmit={onLogin}>
            <input
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
            <button onClick={onLogin}>Login</button>
        </form>
    )
}