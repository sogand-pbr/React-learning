import { useState} from "react";
import {logIn , logOut} from "../Store.jsx"
import {useDispatch , useSelector} from "react-redux"
export const Login = ()=> {

    const [newUserName ,setNewUserName] = useState("")
    const dispatch = useDispatch();
    const selector = useSelector(state => state.user)
    return (

        <div>
            <h1>login {selector.username}</h1>
            <input type="text" onChange={(event)=>setNewUserName(event.target.value)}/>
            <button onClick={() => {
                console.log("Login with:", newUserName);
                dispatch(logIn({username: newUserName}));
            }}></button>
                <button onClick={() => dispatch(logOut())}>logOut</button>
        </div>
)

}
export default Login