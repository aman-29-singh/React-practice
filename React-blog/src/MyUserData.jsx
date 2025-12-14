function MyUserData({userdata, loading1, getUsersdata}){

    const url = "http://localhost:3000/users"

    const deleteUser=async (id)=>{
        //console.log(id);
        let response = await fetch(url + "/" + id,
            {
                method: "delete"
            }
        )
        response = await response.json()
        if(response){
            alert("user deleted successfully")
        }
       getUsersdata();
       {/**so ye function ka use karne deleted id turant UI mein Reflect karne lagti hai delete k baad
        agar ye function getUsersdata() ko idhar call nhi karenge toh deleteApi chalne k baad id ye database
        se toh delete ho jayegi but ye id ka data UI mein dikhega phir refresh karne par UI se delete hoga 
        so iske liye ye function getUsersdata() ko call karte hai   */}
    }

    return(
        <div>
            <h1>user data from json server</h1>
            <ul style={{backgroundColor:"yellow", display:"flex", justifyContent:"space-around",
                padding:"10px", border:"solid black",margin:"", color:"red"
            }}>
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                {/**abb ek aur column add karenge i.e Action ismein hum update and delete
                 * ka button add karenge taki kisi bhi row ka naam ya details update ya delete kar paye
                 */}
                 <li>Actions</li>
            </ul>

      {
        !loading1?//means agar loading nhi hua toh ye <ul> list chalega it is loading1 state
        userdata && userdata.map((item) => (
          <ul style={{backgroundColor:"violet", padding:"10px", border:"solid", display:"flex",
            justifyContent:"space-around"
          }}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
            <button onClick={()=>{deleteUser(item.id)}}>Delete</button>
            {/**ye Delete button par click karne se delete ki api call hogi */}
          </ul>
        )) :  <h1>Loading Datta ....</h1>

      }
        </div>
    )
}

export default MyUserData