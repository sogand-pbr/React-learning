import styles from './App.module.css';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import SubmiForm from "./Pages/SubmiForm.jsx";


function App() {
    return (<div className={styles.App}>
            <SubmiForm/>

        </div>

    );
}

export default App

