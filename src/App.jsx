import styles from './App.module.css';
import {useState} from "react";
import {useToggle} from "./useToggle.jsx";



function App() {

    const [isVisible , toggle]= useToggle(false)

    return (
        <div className={styles.App}>
            <button onClick={toggle}> {isVisible ? "show" : "hide" }</button>
            {isVisible && <h1>"my hidden text"</h1>}

        </div>

    );
}

export default App

