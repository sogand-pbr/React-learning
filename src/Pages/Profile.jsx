
import {ChangeProfile} from "../Components/ChangeProfile.jsx";
import {useContext} from "react";
import {ProfileContext} from "../App.jsx";
const Profile = ()=> {
    const {userName} = useContext(ProfileContext)
    return <div>this is Profile of - username is {userName}
    <ChangeProfile />
    </div>
}

export default Profile