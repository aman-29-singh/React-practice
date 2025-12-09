import { useState } from "react";

function Passing( {passing,name}){
    const[display, setDisplay] = useState()
    return (
        <div>
            <h1>this is Passing function name {name}</h1>
            <button onClick={()=>passing(name)}> display passing function</button>
        </div>
    )
}

export default Passing;