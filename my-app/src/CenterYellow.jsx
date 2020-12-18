import react from "react";
import reactDom from "react-dom";
import './index.css'
import Val from './Val'

console.log(Val())
var {color,val} = Val()
function CenterYellow() {
    
    return(
        <div className='box'>
            <h1 className = "inner-box-1"> Hello Chirag! Good &nbsp;
            <p className="inner-box-2" style={{color:color
            }}>
                {val}
            </p>
     
            </h1>
        </div> )
}

export default CenterYellow