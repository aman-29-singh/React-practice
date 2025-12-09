function UserInput(props){
    return(
        <div>
            <input type="text" placeholder="enter your details" ref={props.ref}/>
        </div>
    )
}

export default UserInput