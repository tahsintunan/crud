import React from "react";

const Button = (props) => {

    return (

        <button onClick={props.buttonClicked} className="relative inline-block group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-pink-400 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                {props.children}
            </span>
        </button>

    )

}

export default Button;
