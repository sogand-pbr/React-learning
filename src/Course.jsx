import React from "react";

const Course = (props)=> {
    return( <div>
        <h1>{props.course.courseName}</h1>
        <button onClick={() => props.deleteCourse(props.course.id)}>x</button>
    </div>)
}
export default Course