import { useForm } from "react-hook-form"

// const {register, handleSubmit} = useForm()

const onSubmit=(data)=> {
    console.log(data)
}
function HookForm(){
    const {register, handleSubmit, formState:{errors}} = useForm()
    return(
        <div>
            <h1>use of React hook form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('firstname', {required: true, message:"first name is reqired"})} 
                type="text" placeholder="enter firstname"/>
                <br/>
                {
                    errors.firstname && errors.firstname.type === 'required' &&
                     (<span style={{color:"red"}}>this is required</span>)
                }
                <br/>
                <input {...register('lastname', {required: true , message:"lastname is required"})} 
                type="text" placeholder="enter lastname"/>
                <br/>
                {
                    errors.lastname && errors.lastname.type === 'required' &&
                    (<span style={{color:"red"}}>the lastname is required</span>)
                }
                <br/>

                <input {...register('password', {required:true, message:"password must be required"})} 
                type="text" placeholder="enter a password"/>
                <br/>
                {
                    errors.password && errors.password.type=== 'required' && 
                    (<span style={{color:"red"}}>the password required</span>)
                }

                <br/>
                <select {...register("Gender", {required:true, message:" must select gender"})}>
                    <option>male</option>
                    <option>Female</option>
                </select>
                <br/>
                {
                    errors.Gender && errors.Gender.type=== "required" && 
                    (<span>must select gender</span>)
                }
                <button>submit</button>
            </form>
        </div>
    )
}

export default HookForm