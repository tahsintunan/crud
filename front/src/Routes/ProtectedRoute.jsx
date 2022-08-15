import React from "react";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
    return <Outlet />
}

export default ProtectedRoute;
