import { useId } from 'react';


function UseForm(){
    const name = useId();
    const password = useId();   

    //now we will see the prefix way of using useId
    const id = useId();
    return(
        <>
        <h1>use of UseId hook here </h1>
        <label htmlFor={name}>Name</label>
        <input type='text' placeholder='enter a name' id={name}/>
        <br></br>
        {/**look here we had use useId() hook and it generates unique id for this name and password
         * fields because  this is a work of useId() hook and this is one way of using useId()
         * so we can also use useId() hook in another way like prefix
         */}

        <label htmlFor={password}>password</label>
        <input type='text' placeholder='enter a password' id={password}/>

        {/**now we  will  see the prefix way of useId hook so isko use karna ka fayda yeh hai
         * ki jo hum upar bana rahe hai woh traditionakl way hai usmein bohat jyada ids ban jaa rahi har
         * ek element k liye alag se id banana pad rha hai 
         * but jo ids hum prefix ka use karke banayenge toh ye ek hii id hum banayenge extternaaly 
         * using useId() hook aur isko apne <form> mein use kar lenge toh yeh har ek element k liye
         * unique ids generate kar degi like {id + '-firstName'} firstName input k liye and
         * {id + '-Address'} for address input so here prefix id same rahe ga but ek unique id generate
         * karega for different field because of  '-firstName' iski wajah se 
         */}
        <h2>use of prefix for useId</h2>
        <label htmlFor={id + 'firstName'}>First Name</label>
        <input id={id + 'firstName'} type='text' placeholder='enter a first name' />

        <label htmlFor={id + 'address'}>Address</label>
        <input id={id + 'address'} type='text' placeholder='enter a Address' />

        <label htmlFor={id + 'skills'}>skills</label>
        <input id={id + 'skills'} type='text' placeholder='enter a Skill' />
        </>
    )
}

export default UseForm;