import { useActionState } from "react"

function UseAction(){
    /**Now we will see useActionState() Hook ki help se humlog Reactjs mein form ko bohat ache se
   * easily handle kar sakte hai toh jaise aaplog form k upar koi bhi action="" perform karoge n 
   * toh isse ek internal state hotti hai woh state update ho jayegi aur jo form ka Result hoga kuch
   * error hai warning hai sabkuch yahan par aako pata chal jayega so isse validations bhi mil jayegi
   * so isse aisa nhi hai ki yahan par hum bohat saare state ka use karenge inn saare states ko handle
   * karne k liye bas ek hook ka use karenge i.e useActionState() aur iski help se hum form ka saare
   * kaam ek saath hii kar payenge i.e validation, submission etc toh yahi dekhenge
   * Now Note - ye useActionState()= [data, action, pending] ye 3 value nikalegi useAction() k andar se
   * so here pehle ye teeno 3 parameter ka matlab samaj lete hai i.e data,action,pending
   * so here data matlab hai ki jab humlog yeh <form></form> ko submit karenge n toh yahn par <input/>
   * fields ka data means 1st input field ka data, 2nd input field ka data ya kuch bhi data aaplog 
   * store karna chahte ho toh iss data parameter of useActionState() hook k data mein aaplog store
   * kara sakte hoo
   * now action from useAction() hook ye basically function hota hai jo humlog yahan par
   * i.e <form action={action}></form> so humlog ye action from useAction() se aise {action} pass 
   * karte hai abb iss {action} of <form> se ye directly call karega action of useAction() hook k
   * action ko 
   * and pending of useAction() hook ye basically aapko batata hai ki aapka <form> ye submit hoo chuka
   * hai ya nahi hua hai agar inprocess hai toh ye aapko batayega ki aapka form abhi submit nhi hua inpending
   * mein hai toh iss case mein aaplog koi button disable karna chahte hoo, kuch loader wagera dikhana 
   * chahte hoo toh woh bhi dikha sakte hoo so useAction() hook ye teen value deta hai data,action,pending
   * and useAction() k andar () k andar humlog 2 parameter pass kar sakte hai 1st agar humlog koi function
   * ko call karna chahte hai ttoh woh function ko humlog useAction() k () mein pass karenge and and 2nd
   * parameter jo humlog pass karenge useAction() k () k andar is intial value of useAction() hook so agar
   * humein intialvalue nhi pass karni hai toh hum undefined pass kar denge
   * i.e useAction(handleSubmit, undefined)      
   */
//   const [data, action, pending] = useActionState(handleSubmit, undefined) 
//so ye useAction() hhok ko pehle define nhi karneka nhi to handleSubmit call nhi hoga

  const handleSubmit =async (previousData, formData)=>{
    //toh ismein humlog input field ka data nikalenge so here we have input field of name and password
    let name = formData.get('name');
    let password = formData.get('password')
    
    //console.log("handleSubmit called",name, password)
    //abb mein chahta hoon form submit hone par delay aaye thoda sa toh async await ka use karenge 
    await new Promise(res=> setTimeout(res,2000))
   // console.log("handleSubmit called",name, password)
    //so isse submit data button par click karne se 2 second ka delay aayega means 2second baad submit hoga
    //now abb mein chahta hoon ki jabtak humara form submit na hoo tab tak ye submit button disabled rahe
    /*so ye jo pending state of useAction() hai n ye jab tak humara form submit nhi hota tab tak 
    disable rehti hai
    */  

    /**now muje valiadation lagana hai dono input field par 
     * so iske liye muje kya karna padega ki jo bhi ye handleSubmit() wala function return karega n 
     * woh apne aap useAction() k  data mein chale jayedga because useActionState(handleSubmit,undefined)
     * k andar humlog handleSubmit ko call kar rhe hai like useActionState(handleSubmit, undefined) aise
     */
    if(name && password){
        return{message:"Data Submitted",name,password}
    }else{
        return{error:'Failed to submit. Enter a proper data',name,password}
    }
}


  const [data, action, pending] = useActionState(handleSubmit, undefined)
  console.log(data) //ye error print karega console par means validattion check hai
    return(
        <div>
            <h1>we will see form using UseAction() hook</h1>
            <form action={action} >
                <input type="text" placeholder="enter name" name="name"/>
                <br></br>
                <input type="password" placeholder="enter password" name="password"/>
                <br></br>
                <button disabled={pending}>Submit data</button>
                <br></br>
                {
                    data?.error && <span style={{color:'red'}}>{data?.error}</span>
                }

                {
                    data?.message && <span style={{color:'green'}}>{data?.message}</span>
                }

                <h3>Name: {data?.name}</h3>
                <h3>password: {data?.password}</h3>
                
            </form>
        </div>
    )
}

export default UseAction;