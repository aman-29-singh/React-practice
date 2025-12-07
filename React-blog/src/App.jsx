import { useEffect, useState } from 'react';
import './App.css'
import User from './User'
import Form from './Form';
import Table from './Table';

function App() {
  const [age, setAge] = useState(0)
  const userObject = {
    user: "abhay",
    email:"abhay@gmail.com"
  }

  useEffect(() => {
  if (age === 0) {
    setAge(239);
  }
}, [age]);
  
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
  return (
    <>
      <h1>hello aman</h1>
      {/*{age==0 ? setAge(239): null }*/}
      <User userObject={userObject} age={age} name="mangal" collegeArray={colleges}/>
      
      <Form/>
      <Table/>   
      <hr></hr>      
       <h2>this is nesting looping</h2>

       {collegeData.map((college,index)=>(
        <div style={{backgroundColor: "cyan", padding:"20px",margin:"2px", border:"2px solid"}} 
        key="index">
        <h4>College Name is :{college.collegeName}</h4>
        <h5>College city is :{college.collegeCity}</h5>

        <h1>Students</h1>
        <ul>
          <li>{college.students.map((studs, index)=> (
            <div key="index">
            <h3>tthe student name is: {studs.Sname}</h3>
            <h3>tthe student email is: {studs.Semail}</h3>
            <h3>tthe student phone no is is: {studs.Sphone}</h3>
            </div>
          ))}</li>
        </ul>

        </div>
       ))}
       
    </>
  )
}

export default App
