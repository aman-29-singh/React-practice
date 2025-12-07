//function User({name, age, userObject, collegeArray ,data}){
function User({user1}){
    console.log("User component received:", user1);
    return(
        <div>
            {/* <h1> hello {name}</h1>
            <h2>this is my age: {age}</h2>
            <h2>this is another user: {userObject.user}</h2>
            <h2>this is another user: {userObject.email}</h2>
            <h2>this are the colleges: {collegeArray}</h2> */}

            <h1>this is Reuse component name {user1?.Name} </h1>
            {/**so here user1?.Name  isliye kiye because React render twice in development enviornment
             * so islye agar user1?.Name nhi krenge toh error aayega
             */}

            
        </div>
    )
}

export default User