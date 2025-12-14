import { useState } from "react"

function UserAdd(){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const handleUser = async ()=> {
        console.log(name,age,email)
        let response = await fetch("http://localhost:3000/users",
            {
                method:"Post",
                body: JSON.stringify(
                    {name, age, email}
                )
            }
        )
        response = await response.json();
        if(response){
            alert("new user added")
        }
    }
    return(
        <div>
            <h1>User Add component</h1>
            <input type="text" placeholder="enter a name" onChange={(event)=> setName(event.target.value)} />
            <br></br>
            <input type="text" placeholder="enter a age" onChange={(event)=> setAge(event.target.value)} />
            <br></br>
            <input type="text" placeholder="enter a email" onChange={(event)=> setEmail(event.target.value)} />
            <button onClick={handleUser}>add a user</button>
        </div>
    )
}

export default UserAdd