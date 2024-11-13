import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

export function LoginSignup() {
    return (
        <div className="login-page">
            <div className="login-form-container">
            <nav>
                <NavLink to=".">Login</NavLink>
                <NavLink to="signup">Signup</NavLink>
            </nav>
            <Outlet/>
            </div>
        </div>
    )
}