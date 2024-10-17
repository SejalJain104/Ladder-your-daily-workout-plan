import React,{useState} from 'react'
import { useLogin } from '../hooks/useLogin'

function Login() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login,isLoading,error} = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await login(email,password)

        console.log(email,password)

    }
  return (
    <div>
    <form className="login" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

        <button>login</button>
        {error && <div className="error">{error}</div>}
    </form>
    </div>
  )
}

export default Login
