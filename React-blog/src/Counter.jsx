import { useEffect } from "react"
function Counter({count, data}){

const handleCounter=()=>{
  console.log("this is counter",{count})
}

const handleData=()=>{
  console.log("this is Data",{data})
}

    useEffect(()=>{
  //hret
  handleCounter()
  handleData()
},[count, data])
  
    return(
        <div>
            <h1>this is a counter component: {count}</h1>
            <h1>this is a data of component: {data}</h1>
        </div>
    )
}

export default Counter;