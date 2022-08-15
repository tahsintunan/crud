import axios from "../Helper/axios";
import React, { useEffect, useState } from "react";
import Blog from "Components/Blog";
import NoBlogs from "Components/NoBlogs";
import Topbar from "Components/Topbar";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([]);
        getAllBlogs();
    }, []);

    const getAllBlogs = () => {
        axios
            .get("api/blog")
            .then((res) => {
                console.log(res);
                setBlogs([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Topbar />
            {blogs?.length > 0 ? (
                <>
                    <h1 className="text-center font-bold text-4xl mt-10">Blogs</h1>
                    <div className="flex flex-row flex-wrap gap-6 w-4/5 m-auto mt-20">
                        {blogs?.map((blog, index) => {
                            return (
                                <Blog
                                    key={index}
                                    id={blog.id}
                                    title={blog.title}
                                    username={blog.poster_name}
                                    content={blog.content}
                                    date={blog.created_at}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="mt-10">
                    <NoBlogs />
                </div>
            )}
        </>
    );
};

export default Blogs;
