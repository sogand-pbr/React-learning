import {useParams} from "react-router-dom";

const Profile = ()=> {
    const {name} = useParams()
    return <div>this is Profile of {name}</div>
}

export default Profile