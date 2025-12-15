import { useEffect, useState } from "react";
import { useParams } from "react-router";

function UserEdit({getUsersdata}){
    //sabse pehle url se id nikalenge ousing useParams() hook
    const {id} = useParams();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const url = "http://localhost:3000/users/"+ id;

    console.log("user ID in UserEdit page is :", id)

    useEffect(()=>{
        getUserFromApi()
        //getUsersdata()
    },[])
    

    const getUserFromApi= async ()=>{
        //this function help to populate the existing data in Edit page using api
        // const url = "http://localhost:3000/users/"+ id;
        console.log(url)
        //yahi Api url se hum individual id k data ko input field k andar populate karenge
        let response = await fetch(url)
        
        response = await response.json();
        console.log("user individual id is ",response)
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)
        //abb ye teeno state ki value input field mein insert karni hai
    }

    const updateUserData=async ()=>{
        console.log(name,age,email);
        let response = await fetch(url,
            {
                method:"put",
                body:JSON.stringify({name,email,age})//yeh object ko string mein convert karega JSON.stringify
            }
        )
        response = await response.json()
        if(response){
            setName(response.name)
            setEmail(response.email)
            setAge(response.age)
        }

    }

    
    // useEffect(()=>{
        
    //     getUsersdata()
    // },[name,age,email])


    return(
        <div style={{textAlign:"center"}}>
            <h1>User Edit page</h1>
            <input type="text" value={name} onChange={(event)=> setName(event.target.value)} 
            placeholder="user name"/>
            <br></br>
            <input type="text" value={age} onChange={(event)=> setAge(event.target.value)}
             placeholder="user age"/>
            <br></br>
            <input type="text" value={email} onChange={(event)=> setEmail(event.target.value)}
             placeholder="user email"/>
            <br></br>
            <button onClick={updateUserData}>Update user</button> 
        </div>
    )
}

export default UserEdit;