function UserEdit({getUsersdata}){
    return(
        <div style={{textAlign:"center"}}>
            <h1>User Edit page</h1>
            <input type="text" placeholder="user name"/>
            <br></br>
            <input type="text" placeholder="user age"/>
            <br></br>
            <input type="text" placeholder="user email"/>
            <br></br>
            <button>Update user</button>
        </div>
    )
}

export default UserEdit;