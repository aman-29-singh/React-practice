import { useState } from "react"

function checkBox(){
    const [skills, setSkills] = useState([])

    const handleskills=(event)=>{
        
        console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            // setSkills(event.target.value)
            setSkills([...skills, event.target.value])
        }else{
            // ye uncheck kiye kisi bhi array k element ko toh woh element UI mein se gayab ho jana
            // chaiye iske liye ye filter function use krte hai
            setSkills([...skills.filter((item) => item != event.target.value)])
        }
    }

    return(
        <div>
            <input type="checkbox" id="php" value="php" onClick={(event)=>{handleskills(event)}}/>
            <label htmlFor="php">php </label>

            <input type="checkbox" id="js" value="Js" onClick={(event)=>{handleskills(event)}}/>
            <label htmlFor="js">js </label>
            

             <input type="checkbox" id="node" value="Node" onClick={(event)=>{handleskills(event)}}/>
            <label htmlFor="node">node  </label>
             
             <input type="checkbox" id="c++" value="C++" onClick={(event)=>{handleskills(event)}}/>
            <label htmlFor="c++">c++ </label>

            <h2>{skills.toString()}</h2>

        </div>
    )
}

export default checkBox