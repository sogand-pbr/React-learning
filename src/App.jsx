import styles from './App.module.css';
import {BrowserRouter as Router ,Routes ,Route , Link} from "react-router-dom"
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contant.jsx";
import Profile from "./Pages/Profile.jsx";
import Nav from "./Pages/Nav.jsx";




function App() {


    return (
        <div className={styles.App}>
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="/about" element={<About/> }/>
                <Route path="/contact" element={<Contact/> }/>
                <Route path="/profile/:name?" element={<Profile/> }/>
                <Route path="/*" element={<div>NOT FOUND</div> }/>
            </Routes>
            <div>foooooooooooooooter</div>
        </Router>



        </div>

    );
}

export default App

