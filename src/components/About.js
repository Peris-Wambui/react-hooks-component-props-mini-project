import React from "react";
import blogData from "../data/blog";
function About (props){
    return (
        <aside>
            <img
            src="https://via.placeholder.com/215"
            alt="blog logo"
            />
            <p>{props.about}</p>

        </aside>
    );
}
export default About;