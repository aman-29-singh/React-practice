import { useState } from "react";

function userCounter(initialValue = 0){
    /**Note this is Custom hooks not a component that is why we had use useCounter so first letter is
     * not capital because it is not a component it is hook toh ye normal function hai jo kuch return
     * karega aur jo return karega usiko humlog doosre componentts mein as a hook use kar lenge 
     * Note with the help of this custom hooks we avoid duplication of code means agar koi function
     * 2 3 component mein use hoga same functionalities ka so same code ko 2 3 jagah use karne se acha
     * humlog custom hooks banaa lenge aur iss custom hooks ko use kar lenge in differentt components
     * jahan bhi use hoga  like in component Page1 and Page2 mein same functionalties i.e counter use ho
     * rha hai isliye humlog ne isliye humlog ne iske liye custtom hook bana liya aur iss custom hook ko
     * component Page1 and Page2 mein use kar liye
     */
    const [data, setData] = useState(initialValue)

    const increment = () => {
        setData(data + 1)
    }
 
    const decrement = () => {
        setData(data - 1)
    }

    const reset = () =>{
        setData(initialValue)
    }
    
    return {increment , decrement, reset, data }
}

export default userCounter