import axios from "../Helper/axios";
import React, { useEffect, useState } from "react";
import Alert from "Components/Alert";
import Topbar from "Components/Topbar";
const UserInfo = () => {

    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        axios.get("api/profile/whoami").then(res => {
            console.log(res);
            let user = res.data
            updateStateValues(user)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const updateStateValues = (user) => {
        setId(user.id)
        setEmail(user.email)
        setName(user.name)
    }

    const saveChanges = (event) => {
        event.preventDefault()
        const body = {
            name: name.length === 0 ? null : name,
            email: email.length === 0 ? null : email,
            password: password.length === 0 ? null : password
        }

        axios.put(`/api/profile/${id}`, body).then(res => {
            console.log(res);
            showSuccess("User updated")
        }).catch(err => {
            showError(err.response.data.message)
        })
    }

    const showError = (errorMessage) => {
        setTimeout(() => {
            setError(null)
        }, 3000);
        setError(errorMessage)
    }

    const showSuccess = (successMessage) => {
        setTimeout(() => {
            setSuccess(null)
        }, 3000);
        setSuccess(successMessage)
    }

    return (
        <>
            <Topbar />
            {error ? <Alert type="error" message={error} /> : null}
            {success ? <Alert type="success" message={success} /> : null}
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 ">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-pink-600 sm:text-3xl">Update Your Account</h1>

                    <form onSubmit={saveChanges} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">

                        <div>
                            <label className="text-sm font-semibold">Name</label>

                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    onChange={(event) => { setName(event.target.value) }}
                                    defaultValue={name}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update name"
                                />

                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    defaultValue={email}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Update password"
                                />

                            </div>
                        </div>

                        <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-pink-600 rounded-lg">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserInfo;