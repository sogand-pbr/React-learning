import styles from './App.module.css';
import Axios from 'axios';
import {useState} from "react";



function App() {

    const [familyEx , setFamilyEx] = useState("")
   const makeExcuse = (excuse) =>{
       Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
           setFamilyEx(res.data[0].excuse)
       })


   }


    return (
        <div className={styles.App}>
            <div>
                <h1>generate excuse</h1>

                <button onClick={() => makeExcuse("family")}>Family</button>
                <button onClick={() => makeExcuse("office")}>Office</button>
                <button onClick={() => makeExcuse("party")}>Party</button>

                <h1>{familyEx}</h1>
            </div>
        </div>

    );
}

export default App

