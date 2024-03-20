import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const Signup = () => {
const  [value, setValues] = useState({
    name: "",
    email:"",   
    password: "" ,
});
const navigate = useNavigate();
const handleInput = (event) =>{
    setValues(prev => (
        {...prev, [event.target.name]:event.target.value }
    ))
}

const handleSubmit = (event) =>{
    event.preventDefault( );
    axios.post('http://localhost:8081/api/signup', value)
    .then((res)=>{  
        navigate('/');
    }).catch((error) =>{
        console.log(console.log(error))
    })
}



    return (
        <>
            <div className="container">
                <div className="card">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="name" onChange={handleInput} id="name" name="name" placeholder="Name" required />
                        <input type="email" onChange={handleInput} id="email" name="email" placeholder="Email" required />
                        <input type="password" onChange={handleInput} id="password" name="password" placeholder="Password" required />
                        <button type="submit">Register</button>
                    </form>
                </div>
                <Link  to='/'>Already have account? Login  here.</Link>
            </div>

        </>
    )
}

export default Signup
