import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',

    });

    const {email, password} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('login submit')
    }
    return (
        <div className="form-container">
            <h1>
            <span className="text-primary">Login</span>
            <form onSubmit={onSubmit}>
            
            <div className="form-group">
           
            <input type='email' name='email' value={email} onChange={onChange} placeholder='Email'/>
            </div>
            <div className="form-group">
         
            <input type='password' name='password' value={password} onChange={onChange} placeholder='Password'/>
            </div>
          
            <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>

            </h1>
        </div>
    )
}

export default Login
