import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';

export default function Login() {

    let navigate = useNavigate();

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

        const result = await axios.post("http://localhost:8080/Project1-1.0-SNAPSHOT/api/employee/login", user).catch(error => { alert("Login Failed...Retry") });

        if (result.status === 200) {
            e.preventDefault();
            navigate(`/salary/${result.data.employee_id}`);
        }
    }


    return (
        <div>
            <Navbar heading={"IIITB Salary Modue"} buttonName={"Contact Developer"} buttonLink="/ContactPage" />
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