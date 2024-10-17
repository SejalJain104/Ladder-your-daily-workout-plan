import React from 'react'
import {Link} from 'react-router-dom'
import { uselogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const {logout} = uselogout()
  const {user} = useAuthContext()

  const handleClick = () =>{
    logout()
  }
  return (
    <header>
    <div className="container">
        <Link to='/'><h1>Workout Buddy</h1></Link>
        <nav>
         {user && (
             <div>
              <span>{user.email}</span>
             <button onClick={handleClick}>logout</button>
           </div>
         )} 
         {!user && (
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            </div>
         )}
         
        </nav>
        
    </div>
    </header>
  )
}

export default Navbar
