import { useState } from "react"

function DrivedState(){
    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")

    const handleUsers = ()=>{
       setUsers([...users,user])
       //console.log(Users)
       //console.log(user)
    }

    console.log(users)

    //Now we will see tthe Drived states
    const total = users.length
    const lastUser = users[users.length-1]
    const unique = [...new Set(users)].length 
    /**so ye jo 3 variables hai n means total,lastUser,unique yeh hai humare derived state 
     * means yahan par variables use karte hai so yahan par states use karne ki jarurat nhi padti
     * so agar Components mein jyada states use karenge ttoh application slow ho jayegi isliye 
     * Drived states use ki jati hai taki states less use karna pade i.e states like useStates etc 
     * so jab components Re-render karte hai toh ye variables i.e const, let, var variables ki 
     * value bhi UI par dikh jati hai 
     */
    return (
        <div>
            <h2>No of Users: {total}</h2>
            <h2>the last User is: {lastUser}</h2>
            <h2>Unique tottal user are: {unique}</h2>
            <input type="text" onChange={(event)=> setUser(event.target.value)} placeholder="enter a name"/>
            <button onClick={handleUsers}>Add users</button>
            {
                users.map((item, index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
        </div>
    )
}

export default DrivedState;