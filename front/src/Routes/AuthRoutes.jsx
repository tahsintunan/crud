import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login"
const authRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default authRoutes