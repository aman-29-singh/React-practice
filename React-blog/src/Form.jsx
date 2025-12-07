import { useState } from "react"
import CheckBox from "./CheckBox"
import Radio from "./Radio"
function Form(){
    
    const [name, setName] = useState("Aman singh")

    
    return(
        <div>
            <input type="text" value={name} placeholder="enter your name"
            onChange={(event)=> setName(event.target.value)}/>
            <h2>{name}</h2>

            
            <button onClick={(event)=>setName("")}>clear text</button>
            <CheckBox/>
            <Radio/>
        </div>
    )
}

export default Form