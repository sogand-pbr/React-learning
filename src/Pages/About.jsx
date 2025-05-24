
import React from "react";
import {useNavigate} from "react-router-dom"
export const About = ()=> {
    let navigate =useNavigate()
    return (
        <React.Fragment>
            <div>tish is about</div>
            <button onClick={()=> navigate("/")}>
                go to home page
            </button>
        </React.Fragment>
    )
}

export default About