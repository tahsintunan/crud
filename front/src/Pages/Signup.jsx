import Alert from "Components/Alert"
import Input from "Components/FormInput"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from '../Helper/axios'

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState()

    const submitSignupForm = (event) => {
        event.preventDefault()
        if (confirmPassword !== password) {
            showError("Password and confirm password doesn't match")
            return;
        }
        signup();
    }

    const signup = () => {
        const body = {
            email,
            name,
            password
        }
        axios.post('auth/register', body).then(res => {
            axios.post('auth/login', { email, password }).then(res => {
                navigate("/blogs/all")
            }).catch(err => {
                if (err.response.status === 401) {
                    let error = err.response.data.message
                    showError(error);
                    return;
                }
                showError("Something went wrong")
            })
        }).catch(err => {
            if (err.response.status === 401) {
                showError(err.response.data.message);
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
            <form onSubmit={submitSignupForm} className="min-h-screen flex flex-col justify-center items-center m-auto w-4/6 md:w-4/12 gap-8">
                <h1 className=" font-bold text-4xl mt-8">Signup</h1>
                <Input
                    change={(event) => { setName(event.target.value) }}
                    type="name"
                    required
                    placeholder="Name" />
                <Input
                    change={(event) => { setEmail(event.target.value) }}
                    type="email"
                    required
                    placeholder="Email" />
                <Input
                    change={(event) => { setPassword(event.target.value) }}
                    type="password"
                    required
                    placeholder="Password"
                    minLength={5}
                />
                <Input
                    change={(event) => { setConfirmPassword(event.target.value) }}
                    type="password"
                    required
                    placeholder="Confirm Password" />

                <button className="font-semibold text-lg bg-pink-500 text-white rounded-lg px-8 py-2 mt-8" type="submit" >Signup</button>
                <span>Already have an account? <a className=" text-pink-400" href="login">Login</a></span>
            </form>

        </>
    )
}


export default Signup