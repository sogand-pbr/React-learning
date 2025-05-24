import {useContext} from 'react'
import {ProfileContext} from "../App.jsx";

export const Home = ()=> {
    const {userName} = useContext(ProfileContext)
    return <div>this is home - username is {userName}</div>
}

export default Home