function MyUserData({userdata, loading1}){
    return(
        <div>
            <h1>user data from json server</h1>

      {
        !loading1?//means agar loading nhi hua toh ye <ul> list chalega it is loading1 state
        userdata && userdata.map((item) => (
          <ul style={{backgroundColor:"violet", padding:"10px", border:"solid"}}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
          </ul>
        )) :  <h1>Loading Datta ....</h1>

      }
        </div>
    )
}

export default MyUserData