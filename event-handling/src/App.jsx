import react, {useState} from "react";
import './index.css'
const App = ()=>{
    // const fullName = ""
    const [fullName, setfullName] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const showName = (e)=>{
        // console.log("click")
        e.preventDefault();
        setfullName(firstName+lastName)
    }
    const showFirstName = (e)=>{
        setFirstName(e.target.value)
    }
    const showLastName = (e)=>{
        setLastName(e.target.value)
    }
    return(
        <>
        <form onSubmit={showName}>
        <div>
            
            <h1>Hello {fullName}</h1>
            <input type="text" onChange={showFirstName} name="" placeholder="Enter your first name"id=""/>
            <input type="text" onChange={showLastName}name="" placeholder="Enter your last name"id=""/>
            <button type="submit">Click me</button>
        </div>
        </form>
        
        </>
    )
}

export default App;