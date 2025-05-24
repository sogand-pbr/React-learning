import styles from './App.module.css';
import Axios from 'axios';
import {useEffect, useState} from "react";


function App() {
    const [catfact, setCatfacts] = useState("")

    useEffect(() => {
        fetchFact()

    }, [])

    const fetchFact = () => {

        Axios.get("https://catfact.ninja/fact")
            .then((res) => {
                setCatfacts(res.data.fact)

            })
    }
    return (
        <div className={styles.App}>

            <button onClick={fetchFact}>fetch cat</button>
            <p>{catfact}</p>
        </div>

    );
}

export default App

