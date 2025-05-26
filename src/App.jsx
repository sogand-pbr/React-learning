import styles from './App.module.css';
import { Home } from "./Pages/Home.jsx";
import { Login } from "./Pages/Login.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Provider} from "react-redux"
import {store} from "./Store.jsx";

function App() {

    return (
        <div className={styles.App}>
            <Provider store={store}>
            <Router>
                <nav>
              <nav>
                  <Link to="/">Home</Link>|
                  <Link to="/login">Login</Link>|
                  <Link to="/Contact">Contact</Link>
              </nav>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Contact" element={<Contact/>} />
                </Routes>
            </Router>
            </Provider>
        </div>
    );
}

export default App;
