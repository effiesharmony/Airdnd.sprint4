import { useState } from 'react'
import { useNavigate } from 'react-router'
import { signup } from '../store/actions/user.actions'
// import { ImgUploader } from '../cmps/ImgUploader'
import { userService } from '../services/user'

export function Signup() {
    const [credentials, setCredentials] = useState(userService.getEmptyUser())
    const navigate = useNavigate()

    async function onSignup(credentials) {
        try {
            await signup(credentials)
            navigate('/stay')
        } catch (err){
            console.log('Signup: err in signup user', err)
        }
    }
    
    function handleChange({ target }) {
        const { name: field, value } = target
        setCredentials(prevCreds => ({ ...prevCreds, [field]: value }))
    }
    
    function handleSubmit(ev) {
        ev.preventDefault()
        onSignup(credentials)
    }
    
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullname"
                value={credentials.fullname}
                placeholder="Fullname"
                onChange={handleChange}
                required
            />
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
            {/* <ImgUploader onUploaded={onUploaded} /> */}
            <button type='submit'>Signup</button>
        </form>
    )
}