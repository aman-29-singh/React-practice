import { useActionState } from "react"

function FormValidation(){
    const handleLogin=(previousData,formData)=>{
        let name = formData.get("name")
        let password = formData.get("password")//for password validation we want regex
        let regex = /^[A-Z0-9]+$/i //so $/i means ye captial letter aur small letter dono ko accept kar paye
        //console.log(name,password)

        if(!name || name.length > 5 ){
            return { error: 'Name cannot be empty or Name should not contain more than 5 characters',name,password}
        }else if(!regex.test(password)){
            return { error: 'password can contain only numeric and alphabetic ',name,password}
        } else{
            return {message: 'Login done ',name,password}
        }
    }
    const[data,action,pending]= useActionState(handleLogin)
    console.log(data)//yahan par data dikhega form ka according to condition which satisfies 

    return(
        <div>
            <h1>Validation using useActionState</h1>
            {
                data?.message && <span style={{color:"green"}}>{data?.message}</span>
            }

            {
                data?.error && <span style={{color:"red"}}>{data?.error}</span>
            }
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="name" placeholder="enter a name"/>
                <br/> <br/>
                <input type="text" defaultValue={data?.password} name="password" placeholder="enter password"/>
                <br/><br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default FormValidation