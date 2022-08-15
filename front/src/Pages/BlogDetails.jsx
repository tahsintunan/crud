import axios from "../Helper/axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "Components/Alert";
import Topbar from "Components/Topbar";

const BlogDetails = () => {
    const [blog, setBlog] = useState();
    const [ifBlogOfUser, setIfBlogOfUser] = useState(false);
    const [error] = useState();

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`api/blog/${id}`)
            .then((res) => {
                let blog = res.data;
                setBlog(blog);

                // check if the blog is of the user
                axios
                    .get(`api/profile/whoami`)
                    .then((res) => {
                        let user = res.data;
                        if (user.id === blog.poster_id) {
                            setIfBlogOfUser(true);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteBlog = () => {
        axios
            .delete(`api/blog/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                navigate("/blogs/all");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Topbar />
            {error ? <Alert type="error" message={error} /> : null}
            <div className="flex flex-col justify-center items-center h-fit w-3/4 m-auto">
                <h1 className="font-bold text-4xl my-10">
                    {blog ? blog["title"] : null}
                </h1>
                <p className="font-medium text-lg">{blog ? blog["content"] : null}</p>
                {ifBlogOfUser ? (
                    <div className="flex flex-row gap-8">
                        <button
                            onClick={() => {
                                navigate(`/blogEdit/${id}`);
                            }}
                            className="mt-20 inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring"
                        >
                            Update
                        </button>
                        <button
                            onClick={deleteBlog}
                            className="mt-20 inline-block px-8 py-3 text-sm font-medium text-red-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-red-500 focus:outline-none focus:ring"
                        >
                            Delete
                        </button>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default BlogDetails;
