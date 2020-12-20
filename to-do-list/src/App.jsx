import React, {useState} from "react";
import List from './List'
import './index.css'
const App = ()=>{
    const [input, setinput] = useState("");
    const [arr, setarr] = useState([]);
    const itemEvent = (e)=>{
        setinput(e.target.value)
    }
    const deleteItems = (id)=>{
        setarr((prevData)=>{
            return prevData.filter((val,index)=>{
                return id!==index
            })
        })
        
    }
    
    const addToArray = ()=>{
        setarr((prevArr)=>{
            return [...prevArr,input]
        })
        setinput("")
    }
    return(
        <>
        <div className="main-div">
            <div className="center-div">
                <h1>To Do List</h1>
                <input type="text"
                value={input}
                placeholder="Enter to Add Items"
                onChange={itemEvent}/>
                <button
                onClick={addToArray}
                >+</button>
                <ol>
                    {arr.map((item,index)=>{
                        return <List val={item}
                        id={index}
                        key={index}
                        onSelect={deleteItems} />
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}
export default App