import Subject from "./Subject"

function Student(){
    return(
        <div style={{backgroundColor:"cyan", padding:"10px"}}>
            <h1>Student component</h1>
            <Subject/>
        </div>
    )
}

export default Student