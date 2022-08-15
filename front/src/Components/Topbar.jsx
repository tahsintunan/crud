import axios from "../Helper/axios";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Topbar = () => {

    const navigate = useNavigate()

    const logout = () => {
        axios.post("auth/logout");
        navigate("/login")
    }

    return (
        <header className="border-b border-gray-100">
            <div
                className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
            >
                <div className="flex items-center">
                    <button type="button" className="p-2">
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                            <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center justify-end flex-1">
                    <nav
                        className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex"
                    >
                        <NavLink
                            to="/blogs/all"
                            className={({ isActive }) =>
                                isActive ? "block h-16 leading-[4rem] border-b-4 text-pink-700 border-current" : "block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current"
                            }
                        >
                            Blogs
                        </NavLink>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "block h-16 leading-[4rem] border-b-4 text-pink-700 border-current" : "block h-16 leading-[4rem] border-b-4 border-transparent hover:text-pink-700 hover:border-current"
                            }
                            to="/blogEdit/new"
                        >
                            New Blog
                        </NavLink>

                    </nav>

                    <div className="flex items-center ml-8">
                        <div
                            className="flex items-center border-gray-100 divide-x divide-gray-100 border-x"
                        >

                            <span>
                                <NavLink
                                    to="/account"
                                    className="block p-6 border-b-4 border-transparent hover:border-pink-700"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Account </span>
                                </NavLink>
                            </span>

                            <span className="hidden sm:block">
                                <button
                                    onClick={logout}
                                    className="block p-6 border-b-4 border-transparent hover:border-pink-700"
                                >
                                    <svg className="w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">

                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                    </svg>

                                    <span className="sr-only"> Search </span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Topbar