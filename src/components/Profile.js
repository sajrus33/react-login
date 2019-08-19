import React from "react";


const Profile = props => {
    return (
        <div>
            <h2>Profile</h2>
            <span>{localStorage.getItem("profileName")}</span>
            <button onClick={()=>{localStorage.removeItem('profileName')}}>Log out</button>
        </div>
    )
}

export default Profile;



