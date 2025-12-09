import { useEffect, useRef, useState } from 'react';
import './App.css'
import User from './User'
import Form from './Form';
import Table from './Table';
import Counter from './Counter';
import Card from './Card';
import Passing from './Passing';
import UserInput from './UserInput';

function App() {
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const[display, setDisplay] = useState(true)
  const userRef = useRef()
  const inputRef = useRef(null);


  const userObject = {
    user: "abhay",
    email:"abhay@gmail.com"
  }

  const handleRef=()=>{
    const user= userRef.current.value
    console.log(alert(user))
  }

  useEffect(() => {//THIS side effect runs when age state is update as we mention in dependency array
  if (age === 0) {
    setAge(239);
  }
}, [age]);

// const handleCounter=()=>{
//   console.log("this is counter",{count})
// }

// const handleData=()=>{
//   console.log("this is Data",{data})
// }


// useEffect(()=>{
//   //hret
//   handleCounter()
//   handleData()
// },[count, data])
  
useEffect(() => {//this function runs when display component is vanishes from UI
  return () => {
    console.log("unmounted component");
  };
}, [display]);

  const colleges = ["patkar", "mithibai", "bhavans", "sathe"]
  //const age = 239;

  const collegeData = [
    {
      collegeName : "IET",
      collegeCity: "mumbai",
      websites: "college1.com",
      students: [
        {
          Sname: "Aakash ",
          Semail: "akash@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "Aayush ",
          Semail: "ayush@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "rohan ",
          Semail: "rohan@gmail.com",
          Sphone: 897373637
        }
      ]
    },

    {
      collegeName : "IIT",
      collegeCity: "DELHI",
      websites: "college1-DELHI.com",
      students: [
        {
          Sname: "Anil ",
          Semail: "anil@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "farhan ",
          Semail: "farhan@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "shree ",
          Semail: "shree@gmail.com",
          Sphone: 897373637
        }
      ]
    },

    {
      collegeName : "NIT",
      collegeCity: "pune",
      websites: "college13-pune.com",
      students: [
        {
          Sname: "pranit ",
          Semail: "pranit@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "pratik ",
          Semail: "pratik@gmail.com",
          Sphone: 897373637
        },
        {
          Sname: "sudesh ",
          Semail: "sudesh@gmail.com",
          Sphone: 897373637
        }
      ]
    }
  ]

   const name = "aman singh"

  const passing =(name)=>{
    console.log(`this is name of passing function ${name}`)
  }

  const updateInput=()=>{//this function is used for forwardRef
    inputRef.current.value = 10000;
    inputRef.current.focus();
    inputRef.current.style.color="red"
  }

 

  return (
    <>
      <h1>hello aman</h1>
      {/*{age==0 ? setAge(239): null }*/}
      <User userObject={userObject} age={age} name="mangal" collegeArray={colleges}/>
      
      <Form/>
      
      {display?<Table/> : null }  {/**conditional rendering of component  */}
      <hr></hr>      
       <h2>this is nesting looping</h2>

       {collegeData.map((college,index)=>(
        <div style={{backgroundColor: "cyan", padding:"20px",margin:"2px", border:"2px solid"}} 
        key={index}>
        <h4>College Name is :{college.collegeName}</h4>
        <h5>College city is :{college.collegeCity}</h5>

        <h1>Students</h1>
        <ul>
          <li>{college.students.map((studs, index)=> (
            <div key={index}>
            <h3>tthe student name is: {studs.Sname}</h3>
            <h3>tthe student email is: {studs.Semail}</h3>
            <h3>tthe student phone no is is: {studs.Sphone}</h3>
            </div>
          ))}</li>
        </ul>

        
        </div>
       ))}

       <Card/>

     <button style={{margin: "5px"}} onClick={()=> setCount(count+1)}>counter</button>
     <button onClick={()=>setData(data+1)}>data</button>
     <Counter count={count} data={data}/>  
     <button onClick={()=>setDisplay(!display)}>Toggle</button>
     <br></br>
     <input type='text' ref={userRef} placeholder='enter your name'/>{/**here e have seen how to reference any HTML ELEMENT with useRef */}
     <button onClick={handleRef}>add reference</button> 

     <Passing passing={passing} name={name}/>{/**here we have seen how to pass a functiom in another component */}
     
     {/*<input type='text' placeholder='enter information' ref={inputRef}/>*/}
     <UserInput ref={inputRef}/>{/**it is for forwardRef */}
     <button onClick={updateInput}>update input</button>
    </>
  )
}

export default App
