import { startTransition, useEffect, useRef, useState } from 'react';
import './App.css'
import User from './User'
import Form from './Form';
import Table from './Table';
import Counter from './Counter';
import Card from './Card';
import Passing from './Passing';
import UserInput from './UserInput';
import { useFormStatus } from "react-dom";
import { useTransition } from 'react';
import DrivedState from './DrivedState';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
import UseAction from './UseAction';
import UseForm from './UseForm';
import College from './College';
import { SubjectContext } from './SubjectContext';
import UserListing from './UserListing';
import { Route, Routes } from "react-router";
import { NavLink } from 'react-router';
import UserAdd from './UserAdd';
import MyUserData from './MyUserData';
import UserEdit from './UserEdit';
import FormValidation from './FormValidation';

function App() {
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)
  const userRef = useRef()
  const inputRef = useRef(null);
  const { pending } = useFormStatus()
  //const[pending, setPending]= useState(false)
  //const[loading, setLoading] = useState(false)
  const [loading, startTransition] = useTransition(false)
  /**documentation mein aisa hai const[pending, startTransition] but humne pending ki jagah 
   * loading use kiya hai because humne pending already use kar liya tha upar useFormStatus() mein
   */
  const [user, setUser] = useState("")
  const [subject, setSubject] = useState("")
  const [apidata, setApiData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const [loading1, setLoading] = useState(false)//loading by default false hai
  //ye loading1 yeh api call k time par loading1 ko true karna hai
  //phir jaise hii api call se data aajayega waise hii setLoading ko false karna hai

  const [user1, setUser1] = useState([
    { name: "sam", id: "1" },
    { name: "john", id: "2" },
    { name: "tyrion", id: "3" }
  ])

  //NOW WE WILL SEE the objects in state
  const [data1, setData1] = useState({
    name: "aman",
    address: {
      city: "mumbai",
      country: "india"
    }
  })

  /**Now we will see useActionState() Hook ki help se humlog Reactjs mein form ko bohat ache se
   * easily handle kar sakte hai toh jaise aaplog form k upar koi bhi action="" perform karoge n 
   * toh isse ek internal state hotti hai woh state update ho jayegi aur jo form ka Result hoga kuch
   * error hai warning hai sabkuch yahan par aako pata chal jayega so isse validations bhi mil jayegi
   * so isse aisa nhi hai ki yahan par hum bohat saare state ka use karenge inn saare states ko handle
   * karne k liye bas ek hook ka use karenge i.e useActionState() aur iski help se hum form ka saare
   * kaam ek saath hii kar payenge i.e validation, submission etc toh yahi dekhenge
   * Now Note - ye useActionState()= [data, action, pending] ye 3 value nikalegi useAction() k andar se   
   */


  const userObject = {
    user: "abhay",
    email: "abhay@gmail.com"
  }

  const handleRef = () => {
    const user = userRef.current.value
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
      collegeName: "IET",
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
      collegeName: "IIT",
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
      collegeName: "NIT",
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

  const passing = (name) => {
    console.log(`this is name of passing function ${name}`)
  }

  const updateInput = () => {//this function is used for forwardRef
    inputRef.current.value = 10000;
    inputRef.current.focus();
    inputRef.current.style.color = "red"
  }

  // const handleSubmit=async ()=>{ it is for disabled button using statte means without useFormStatus
  //   setPending(true)
  //   await new Promise((res)=> setTimeout(res, 2000))
  //   console.log("aman")
  //   setPending(false)
  // }


  const handleFormSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000)) //wait for 5 seconds api call bhi laga skte hai
    console.log("aman singh")
  }

  function CustomerForm() {
    const { pending } = useFormStatus()
    console.log(pending)
    return (
      <div>
        <input type='text' placeholder='enter first named' />
        <br></br>
        <input type='text' placeholder='enter last name' />
        <br></br>
        <button disabled={pending}> form submit</button>
        {/**Note useFormStatus() hook ye kaam krta hai sirf aur sirf form hoga tabhi means
       * agar form mein button wagera par loading hai toh kaam kr skta hai usingFormStatus() hook
       * but agar without usingFormStatus() hook k humein sirf kisi button click par pending ya 
       * Loading wagera dikhani hai toh iske liye hum use krte hai useTransition() hook ka    
       */}

      </div>
    )
  }


  // const handleLoading = async () => { This is my way of writing promise
  //   setLoading(true)
  //   await new Promise((resolve)=> setTimeout((resolve), 5000))
  //   setLoading(false)
  // }

  // const handleLoading=async ()=>{
  //   setLoading(true)
  //   await new Promise((resolve)=>{
  //      setTimeout((resolve), 5000)
  //   })

  //   setLoading(false)


  //   {/**so iss tarah is loading effect hum sttate k saath kar sakte hai but idhar hum pehle state loading
  //     ko true karwa rahe hai phir false karwa rahe hai so agar ye promise ya api call bohat line ka 
  //     hai 100 150 line ka hai toh iske andar bhibohat saari problem aasakti hai
  //       */}
  // }

  /*toh iske alawa agar humein Loading effect ko directly karna hai without using useTransition
  toh iske liye hum kar saktte use useTransition() hook ka toh hum bina useState() hook k karenge */
  const handleLoading = () => {

    startTransition(async () => {
      await new Promise(res => setTimeout(res, 10000))
    })
    /**so here we had use useTransition() hook so here button mein disabled={loading} hai
     * because loading ya phir pending of useTransition() ka byDefault false hota hai but jab ye
     * logic i.e startTransition() ka function jab chalta hai toh ye true ho jati hai pending ya
     * loading
      */
  }


  const updateObject = (val) => {
    console.log(val)
    /**now here object is data1 toh humein data1 object mein key are name,address 
     * so humein data1 object mein keys ki value ko update karna hai so humlog aise update 
     * nhi kar skte i.e setData1({name: "val"}) so aise update nhi kar skte object ko
     * because here error aayega kyunki yahan par abb name hii key bach gya baki saari chize
     * toh gayab hogyi like address,city, country yeh saari chize toh gayab hogyi nhi from bject data1
     * se toh iss case k andar humlog object data1 ko update kaise kar skte hai
     * so pehlr toh dekhenge iss data1 mein poora object hai humare pass toh pehle isse console
     * mein print karenge
     */

    /*console.log(data1) so here iss data1 object k andar sbkuch hai toh agar iske andar
    humlog update karenge toh hojayega*/
    data1.name = val //toh abb update ho jayega
    console.log(data1)//so abb update ho jayega data1 object ka key name update ho jayega
    /**so yeh data1 agar aise update ho jaa rha hai toh aise hii state k andar bhi update ho jayega
     * 
     */
    setData1(data1) //so here yeh abhi tak update nhi hua in UI mein
    /**so setData1(data1) se object data1 update hokar UI mein isliye nhi dikh rha
     * because  iska reason hai ki jab aaplog ek object ki key ko directtly update karte ho n
     * Reactjs mein toh uss state ko samaj mein hii nhi aata ki kuch update hua hai ya nhi hua hai
     * toh iske liye ek concept aata hai deep copy and shallow  copy object ka concept
     * toh kya hota hai ki yahan object aise update nhi hoti iske liye jo Reference haai n woh
     * change karna padta hai abhi iska Reference same hai so spread operator ka use karne ka
     * like setData1({...data1}) toh isse yeh ek naya object create kar dega poorane wale object 
     * ko hatta k 
     */
    setData1({ ...data1 })
    /**isse {...data1} note - isse new object create ho jayega  so pehle wala jo object hai uska
     * reference break ho jayega aur new object yahan par create ho jayega 
     */

    /**now hum temp variable ka use karke bhi kar skte hai like
     * let tempData = data1
     * tempData.name = val
     * setData({...tempData}) aise bhi kar skte hai yeh bhi same work karega
     */

  }
  //now city ka naam change karke  dekhenge

  const handleCity = (city) => {
    data1.address.city = city;
    console.log(data1);
    setData1({ ...data1, address: { ...data1.address, city } })
  }

  // const updateArray=(val)=> {
  //   user1[user1.length-1] = val//this is how we update last element of Array in console
  //   {/**here this val is event.target.value  of input element  aur yahi event.target.value
  //     hum iss function updateArray() mein pass kar rhe hai aur yahi value last element of array ko
  //     mil rahi hai */}
  //   console.log(user1);{/**yeh toh hogya console mein update now humlog dekhenge UI mein update */}
  //   setUser1(...user1, val);
  // }


  const updateArray = (val) => {
    const updated = [...user1];
    updated[updated.length - 1] = {
      ...updated[updated.length - 1],
      name: val
    };

    setUser1(updated);
  };

  // const handleSubject =()=> {

  // }

  useEffect(() => {
    setLoading(true)
    //getUsers()//ye isse 1 time chalega because of [] this dependency
    getUsersdata()


  }, [])


  async function getUsers() {
    const url = "https://dummyjson.com/users";
    //const response = await fetch(url);//here const kiye toh next line mein initialize nhi kar sakte isliye let use karneka
    let response = await fetch(url);
    response = await response.json()
    console.log(response);
    setApiData(response.users)//yes users key mein array of object hai toh isko render krne k liye map ka use krnge
    setLoading(false)//means api call ho jane k baad iss Loading ko false kar denge 
  }



  async function getUsersdata() {
    const url = "http://localhost:3000/users";
    //const response = await fetch(url);//here const kiye toh next line mein initialize nhi kar sakte isliye let use karneka
    let response = await fetch(url);
    response = await response.json()
    //console.log(response);
    setUserData(response)//yes users key mein array of object hai toh isko render krne k liye map ka use krnge
    console.log(userdata)
    /**console.log(userdata) does not show updated data because React state updates are asynchronous, 
     * and the state value is updated only after the component re-renders. */

    /**State updates in React happen after the function finishes and the component re-renders */
  }

  /**to solve this issue console.log(userdata) does not show we have to use another 
   * useEffect means this below one useEffect
   */
  useEffect(() => {
    console.log(userdata);
  }, [userdata]);

  return (
    <>
      <h1>hello aman</h1>
      {/*{age==0 ? setAge(239): null }*/}
      <User userObject={userObject} age={age} name="mangal" collegeArray={colleges} />

      <Form />

      {display ? <Table /> : null}  {/**conditional rendering of component  */}
      <hr></hr>
      <h2>this is nesting looping</h2>

      {collegeData.map((college, index) => (
        <div style={{ backgroundColor: "cyan", padding: "20px", margin: "2px", border: "2px solid" }}
          key={index}>
          <h4>College Name is :{college.collegeName}</h4>
          <h5>College city is :{college.collegeCity}</h5>

          <h1>Students</h1>
          <ul>
            <li>{college.students.map((studs, index) => (
              <div key={index}>
                <h3>tthe student name is: {studs.Sname}</h3>
                <h3>tthe student email is: {studs.Semail}</h3>
                <h3>tthe student phone no is is: {studs.Sphone}</h3>
              </div>
            ))}</li>
          </ul>


        </div>
      ))}

      <Card />

      <button style={{ margin: "5px" }} onClick={() => setCount(count + 1)}>counter</button>
      <button onClick={() => setData(data + 1)}>data</button>
      <Counter count={count} data={data} />
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <br></br>
      <input type='text' ref={userRef} placeholder='enter your name' />{/**here e have seen how to reference any HTML ELEMENT with useRef */}
      <button onClick={handleRef}>add reference</button>

      <Passing passing={passing} name={name} />{/**here we have seen how to pass a functiom in another component */}

      {/*<input type='text' placeholder='enter information' ref={inputRef}/>*/}
      <UserInput ref={inputRef} />{/**it is for forwardRef */}
      <button onClick={updateInput}>update input</button>


      {/*  <button disabled={pending} onClick={handleSubmit}>submitt</button>{/**it is for disabled button using state */}

      <form action={handleFormSubmit}>
        <CustomerForm />
      </form>

      <button disabled={loading} onClick={handleLoading}>loading</button>
      {/**isse ye button click karne par loading aayega  */}
      {
        loading ?
          <img style={{ width: "1000px" }} src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />

          : null
      }

      <DrivedState />
      <AddUser setUser={setUser} />{/**this is lifting state up */}
      <DisplayUser user={user} />
      <hr></hr>

      <h1>Updating Objects in state</h1>
      <input type='text' placeholder='emter a values of objects'
        onChange={(event) => updateObject(event.target.value)} />

      <input type='text' placeholder='update city'
        onChange={(e) => handleCity(e.target.value)} />
      <h3>name: {data1.name}</h3>
      <h3>city: {data1.address.city}</h3>
      <h3>country: {data1.address.country}</h3>

      <input type='text' placeholder='enter user name'
        onChange={(event) => updateArray(event.target.value)} />
      {
        user1.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))
      }

      <UseAction />
      <hr></hr>
      <UseForm />
      <UseForm />


      <div style={{ backgroundColor: "yellow", padding: "10px,", margin: "10px" }}>
        <select onChange={(event) => setSubject(event.target.value)}>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">BioLogy</option>
        </select>
        <button onClick={() => setSubject("")}>clear value</button>
        <SubjectContext value={subject}>
          <h1>Context Api</h1>
          <College />
        </SubjectContext >
      </div>

      <h1>Api data here</h1>
      <h3>api data is:</h3>
      {/* {
      apidata && apidata.map((data)=> (
        <ul style={{border:"solid", padding:"10px", backgroundColor:"skyblue", display:"flex",
          justifyContent:"space-around", margin:"0"
        }}>
          <li>{data.firstName}</li>
          <li>{data.lastName}</li>
          <li>{data.username}</li>
          <li>{data.weight}</li>
          <li>{data.eyeColor}</li>
        </ul>
      ))
     }  */}

     <ul>
      <li><NavLink to="/listing">user-listing</NavLink></li>
      <li><NavLink to="/add-user">user-Add</NavLink></li>
     </ul>
     
      


      <Routes>
        {/*<Route index element={<StepOne />} />*/}
        <Route path="/listing" element={<UserListing apidata={apidata} loading1={loading1} />} />
        {/**props idhar Route mein hii send kar diya <UserListing/> ka i.e apidata and loading1 ka
         * props 
         */}
        <Route path="/add-user" element={<UserAdd getUsersdata={getUsersdata}/>} />
        <Route path="/edit-user/:id" element={<UserEdit getUsersdata={getUsersdata} />} />
      </Routes>
      
      
      {/*<UserListing apidata={apidata} loading1={loading1} />*/}

      <MyUserData userdata={userdata} getUsersdata={getUsersdata}/>
      {/* <h1>user data from json server</h1>

      {
        userdata && userdata.map((item) => (
          <ul>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
          </ul>
        ))
      } */}
      <FormValidation/>
    </>
  )
}

export default App
