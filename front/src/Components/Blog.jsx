import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Blog = (props) => {
    return (
        <Link to={"/blog/" + props.id} className="relative w-96 p-8 pb-24 border-t-4 border-pink-600 rounded-sm shadow-xl">
            <h5 className="text-4xl font-bold">{props.title}</h5>
            <p className="text-md text-gray-800">By {props.username}</p>
            <p className="text-sm text-gray-500">{moment(props.date.slice(0, 10), "YYYY-MM-DD").format("dddd, MMMM Do YYYY").toString()}</p>
            <p className="mt-4 text-lg font-medium text-gray-500 line-clamp-2">
                {props.content}
            </p>

            <span className="absolute bottom-8 right-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </span>
        </Link>
    )
}

export default Blog;