import userCounter from "./customhooks/userCounter"

function Page2(){
    const {increment, decrement, data, reset} = userCounter(10)
    return (
        <div>
             <div style={{margin:"50px"}}>
            <h1>Page2 using custom hooks</h1>
            <button onClick={increment} style={{padding:"10px"}}>+</button>
            <span style={{padding:"10px"}}>{data}</span>
            <button  onClick={decrement} style={{padding:"10px"}} >-</button>
            
            <button onClick={reset} style={{padding:"10px", margin:"10px"}}>reset</button>
        </div>
        </div>
    )
}

export default Page2