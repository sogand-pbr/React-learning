import styles from './App.module.css';
import Axios from 'axios';
import {use, useEffect, useState} from "react";



function App() {

    const [name , setName ]= useState("")
    const [information , setInformation] = useState({})
    const fetchAge =()=>{

        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=> {
            setInformation(res.data)
        })

    }




    return (
        <div className={styles.App}>

            <input placeholder="sogand" onChange={(event)=>setName(event.target.value)}/>
            <button onClick={fetchAge}>senno begoo</button>
            <h1>senet : {information.age}</h1>
            <h1>esmet : {information.name}</h1>
        </div>

    );
}

export default App

