import { useReducer } from "react"

const emptydata = {
    firstname:"",
    lastname:"",
    age:"",
    address:""
}

function reducer(state, action) {
  // ...
//   console.log("state and action are",state,action)
  /**so here state mein useReducer() k andar jo emptydata pass kiye hai woh aayega and action
   * mein jo form se dispatch kar rhe hai woh action aayega i.e dispatch(event.target.value)
   */
  console.log("state and action are",action)
}

function UseReducer(){
    const [state, dispatch] = useReducer(reducer, emptydata);
    return(
        <div>
          <h1>Use of useReducer hook in this form</h1>
            <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:'firstname'})} placeholder="enter firstname"/>
            <br/><br/>
            <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:'lastname'})} placeholder="enter lastname"/>
            <br/><br/>
            <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:'age'})} placeholder="enter age"/>
            <br/><br/>
            <input type="text" onChange={(event)=> dispatch({val:event.target.value,type:'address'})} placeholder="enter address"/>
            <br/><br/>
            <button>submit</button>
        </div>
    )
}

export default UseReducer;