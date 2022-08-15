import axios from "../Helper/axios";
import Input from "Components/FormInput";
import React, { useEffect, useState } from "react";
import Alert from "Components/Alert";
import { useNavigate, useParams } from "react-router-dom";
import Button from "Components/Button";


const EditBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [blog, setBlog] = useState()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const { id } = useParams()

    useEffect(() => {
        if (id !== 'new') {
            getBlogById()
        }
    }, [id])

    const getBlogById = () => {
        axios.get(`api/blog/${id}`).then(res => {
            let blog = res.data
            setTitle(blog.title)
            setContent(blog.content)
            setBlog(blog)
        }).catch(err => {
            console.log(err);
        })
    }

    const saveBlogChanges = (event) => {
        event.preventDefault();
        if (id === "new") {
            createBlog()
            navigate(`/blogs/all`)
            return;
        }
        updateBlog()
        navigate(`/blog/${id}`)
    }


    const createBlog = () => {
        const body = {
            title, content,
        }
        axios.post("api/blog", body).then(res => {
            showSuccess("Blog created")
        }).catch(err => {
            let error = err.response.data.message
            showError(error);
        })
    }

    const updateBlog = () => {
        const body = {
            title, content,
        }
        axios.put(`api/blog/${id}`, body).then(res => {
            showSuccess("Blog Updated")
        }).catch(err => {
            let error = err.response.data.message
            showError(error);
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
            {error ? <Alert type="error" message={error} /> : null}
            {success ? <Alert type="success" message={success} /> : null}

            <h1 className="text-4xl font-bold text-center mt-10">Write Your Own Blog</h1>

            <form onSubmit={saveBlogChanges} className="w-3/5 flex flex-col gap-6 m-auto mt-20">
                <Input
                    change={(event) => { setTitle(event.target.value) }}
                    placeholder="Title"
                    defaultValue={title}
                    type="text"
                    required />
                <textarea
                    defaultValue={content}
                    className="w-full py-2 placeholder:font-bold placeholder:text-xl px-2 outline-none rounded-lg bg-gray-100"
                    onChange={(event) => { setContent(event.target.value) }}
                    rows={6}
                    placeholder="Content" />
                <div className="w-full flex justify-center">
                    <Button
                        type="submit">
                        {blog ? "Update" : "Create"}
                    </Button>
                </div>
            </form>

        </>
    )
}

export default EditBlog;