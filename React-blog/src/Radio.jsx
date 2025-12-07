import { useState } from "react"

function Radio(){
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")    
    return (
        <div>
            <input type="radio" name="gender" id="male" value="male" 
            onChange={(event)=>setGender(event.target.value)}/>
            <label htmlFor="male">male</label>

            <input type="radio" name="gender" id="female" value="female"
            onChange={(event)=>setGender(event.target.value)}/>
            <label htmlFor="female">female</label>
            
            <h2>{gender}</h2>
             
             <hr></hr>

            <h1>select city in Dropdown</h1>
            <select onChange={(event)=> setCity(event.target.value)} >
                <option value="mumbai"> mumbai</option>
                <option value="delhi"> delhi</option>
                <option value="noida"> noida</option>
            </select>

            <h2>{city}</h2>


            
        </div>
    )
}
export default Radio