import axios from "axios";
import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate()
  const [value, setValues] = useState({
    email: '',
    password: ''
  });


  const handleInput = (event) => {
    setValues(prev => (
      { ...prev, [event.target.name]: event.target.value }
    ))
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:8081/api/login', value)
    .then((res) => {
          if (res.data === 'success'){
            navigate('/home')
          } else {
              alert("no record")
          }
        }
    ).catch(err=>console.log(err));
}


  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>

            <input type="email"
              onChange={handleInput}
              name='email' placeholder="Email"
              required />
            <input type="password" id="password"
              name="password"
              onChange={handleInput}
              placeholder="Password"
              required />
            <button type="submit">Login</button>
          </form>
        </div>
        <Link to='/sign-up'>Create an Account</Link>
      </div>

    </>
  )
}

export default Login
