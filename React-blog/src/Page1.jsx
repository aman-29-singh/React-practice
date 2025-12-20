import userCounter from "./customhooks/userCounter"
/**Notte in this we had use custom hooks i.e userCounter */
function Page1(){
    const {data, increment, decrement, reset} = userCounter(0)
    return (
        <div style={{margin:"50px"}}>
            <h1>Page1 using custom hooks</h1>
            <button onClick={increment} style={{padding:"10px"}}>+</button>
            <span style={{padding:"10px"}}>{data}</span>
            <button  onClick={decrement} style={{padding:"10px"}} >-</button>
            
            <button onClick={reset} style={{padding:"10px", margin:"10px"}}>reset</button>
        </div>
    )
}

export default Page1