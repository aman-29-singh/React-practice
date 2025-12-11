import { useState } from "react";

function AddUser({setUser}){
    
    return(
        <div>
            <h1>Add users</h1>
            <input type="text" onChange={(event)=> setUser(event.target.value)} placeholder="enter a name"/>
            <hr></hr>
        </div>
    )
}

export default AddUser;