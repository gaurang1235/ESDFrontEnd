
import React, { useState } from 'react'
import Navbar from '../layout/Navbar';

export default function Login({ method, logout }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const onSubmit = async (e) => {
        e.preventDefault();

        method(user);
    }


    return (
        <div>
            <Navbar heading={"IIITB Salary Modue"} buttonName={"Made with ❤️ by Gaurang Agarwal"} buttonLink={logout} />
            <div className='Container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <script>alert("hdfhfeb")</script>
                        <h2 className='text-center m-4'>Employee SignIn</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-4'>
                                <label htmlFor='email' className='form-label'>
                                    Employee-Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                    autoComplete="off"
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='password' className='form-label'>
                                    Employee-Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="Login" className="btn btn-outline-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}