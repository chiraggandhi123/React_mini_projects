import react from "react"
import reactDom from "react-dom"
import {add,sub,mul,div} from './cal_util'

reactDom.render(
<>
<ul>
<li><h1>Addition of two elements is {add(1,2)}</h1></li>
<li><h1>Multiplication of two elements is {mul(1,2)}</h1></li>
<li><h1>Substraction of two elements is {sub(1,2)}</h1></li>
<li><h1>Division of two elements is {div(2,3).toFixed(2)}</h1></li>
</ul>
</>,document.getElementById('root'))