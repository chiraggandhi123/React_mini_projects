import react from "react";

const List = (props)=>{

return(<>
<div className="todo-style">
<i className="fa fa-times" aria-hidden="true" onClick={()=>{
    props.onSelect(props.id)
}}></i>

<li>{props.val}</li>
</div>

</>)
}
export default List