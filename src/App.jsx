import styles from './App.module.css';
import {useToggle} from "./useToggle.jsx";



function App() {

    const [isVisible , toggle]= useToggle(false)
    const [isVisible2 , toggle2]= useToggle(false)

    return (
        <div className={styles.App}>
            <button onClick={toggle}> {isVisible ? "show" : "hide" }</button>
            {isVisible && <h1>"my hidden text"</h1>}
            <button onClick={toggle2}> {isVisible2 ? "show" : "hide" }</button>
            {isVisible2 && <h1>"my hidden text"</h1>}

        </div>

    );
}

export default App

