import React from "react";


const Home = props => {

    return (
       <div>
           <h1>Home</h1>
           <button onClick={()=>{localStorage.setItem('profileName',"Sajrus33")}}>Log in</button>
       </div>
    )
}

export default Home;



