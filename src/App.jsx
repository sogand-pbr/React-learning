import styles from './App.module.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contant.jsx";
import Profile from "./Pages/Profile.jsx";
import Nav from "./Pages/Nav.jsx";
// import {useState, createContext} from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


function App() {
    const client = new QueryClient()
    return (<div className={styles.App}>

            <QueryClientProvider client={client}>
                <Router>
                    <Nav/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/*" element={<div>NOT FOUND</div>}/>
                    </Routes>
                    <div>footer</div>
                </Router>
            </QueryClientProvider>

        </div>

    );
}

export default App

