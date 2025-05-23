import React, {useState} from 'react';
import styles from './App.module.css';
import Course from "./Course.jsx";

// import {useState} from "react";


function App() {

    const [courseList, setCourseList] = useState([])
    const [newCourse, setNewCourse] = useState("")

    const handleChange = (event) => {
        setNewCourse(event.target.value)
    }

    const addCourse = () => {
        const course = {
            id: courseList.length === 0
                ? 1
                : courseList[courseList.length - 1].id + 1,
            courseName: newCourse
        }
        setCourseList([...courseList, course])
    }


    const deleteCourse = (courseId)=> {
        setCourseList(courseList.filter((course) =>
             courseId !== course.id )
        )

    }

    return (
        <div className={styles.App}>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={addCourse}>add course</button>
            </div>
            <div className="list">
                {courseList.map((course , index) => {
                  return(
                      <Course key={index} course={course} deleteCourse = {deleteCourse}/>
                  )
                })}
            </div>
        </div>

    );
}

export default App

