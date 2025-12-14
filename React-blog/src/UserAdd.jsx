import { useState } from "react"

function UserAdd({getUsersdata}){
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
        getUsersdata();
        {/**so ye function ka use karne se new user jo add hua hai turant UI mein Reflect karne lagti hai
        add karne k baad agar ye function getUsersdata() ko idhar call nhi karenge toh post means addUser 
        ki api chalne k baad woh new user dattabase mein toh add ho jayega but UI mein Reflect nhi karega 
        so UI mein Reflect karne k liye phir se page ko Reload karna padega i.e render karna padega so 
        phir se render ya reload na karna pade isliye humlog getUsersdata() ko api call k badd call kartte hai   */}

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