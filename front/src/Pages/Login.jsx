import Alert from "Components/Alert";
import Input from "Components/FormInput";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Helper/axios'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const submitLoginForm = (event) => {
        event.preventDefault()
        const body = {
            email,
            password
        }
        axios.post('auth/login', body).then(res => {
            navigate("/blogs/all")
        }).catch(err => {
            if (err.response.status === 401) {
                let error = err.response.data.message
                showError(error);
                return;
            }
            showError("Something went wrong")
        })
    }

    const showError = (errorMessage) => {
        setTimeout(() => {
            setError(null)
        }, 3000);
        setError(errorMessage)
    }

    return (
        <>
            {error ? <Alert type="error" message={error} /> : null}
            <form onSubmit={submitLoginForm} className="min-h-screen flex flex-col justify-center items-center m-auto w-4/6 md:w-4/12 gap-8">
                <h1 className=" font-bold text-4xl mb-8">Login</h1>
                <Input change={(event) => { setEmail(event.target.value) }} type="email" required placeholder="Email" />
                <Input change={(event) => { setPassword(event.target.value) }} type="password" required placeholder="Password" />

                <button className="font-semibold text-lg bg-indigo-500 text-white rounded-lg px-8 py-2 mt-8" type="submit" >Login</button>
                <span>Don't have an account? <a className=" text-blue-400" href="signup">Sign Up</a></span>
            </form>
        </>
    )
}

export default Login;