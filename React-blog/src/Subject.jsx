import { useContext } from "react"
import { SubjectContext } from "./SubjectContext";

function Subject(){
    const subject = useContext(SubjectContext);
    return(
        <div style={{backgroundColor:"red", padding:"10px"}}>
            <h1>Subject component : {subject}</h1>
            {/**agar parent means jahan se jis parent se data muje  iss Subject component
             * mein chaiye hai agar uss parentt component mein <SubjectProvider></SubjecttProvider>
             * nhi lagayenge toh ye jo SubjectContext ka jo {subject} hai ye by default ismein aayega
             * uss subject ki value i.e maths aayega
             */}
        </div>
    )
}

export default Subject