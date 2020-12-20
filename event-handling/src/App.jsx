import react, {useState} from "react"
import './index.css'

const App = ()=>{
    const [state, setstate] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
    });
    const submitform = ()=>{
        
    }
    const inputEvent = (e)=>{
        // console.log(e.target.value)
        // console.log(e.target.name)
    
        const {name, value} = e.target

        setstate((pv)=>{
            return{
                ...pv,
                [name]:value,
            }
        })
    }
    return(
        <>
        <form onSubmit={submitform}>

        
        <div>
        <h1>hello {state.fname} {state.lname}</h1>
        <p>{state.email} | {state.phone}</p> 
        
        <input type="text"
        name = "fname"
        value = {setstate.fname}
        onChange = {inputEvent}
        placeholder="Enter your first name"/>
        <input type="text"
        name = "lname"
        value = {setstate.lname}
        onChange = {inputEvent}
        placeholder="Enter your last name"/>
        <input type="email"
        name = "email"
        value = {setstate.email}
        onChange = {inputEvent}
        placeholder="Enter your email"/>
        <input type="phone"
        name = "phone"
        value = {setstate.phone}
        onChange = {inputEvent}
        placeholder="Enter your phone number"/>
        <button type="submit">Click me</button>
        </div>
        </form>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        
    
        
        </>
    )
}

export default App