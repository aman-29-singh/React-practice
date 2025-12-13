import Student from "./Student"

function College(){
    return(
        <div style={{backgroundColor:"orange", padding:"10px"}}>
            <h1>College Component</h1>
            <Student/>
        </div>
    )
}

export default College