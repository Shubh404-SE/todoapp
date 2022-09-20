import React from "react";


const ToDolist = (prop) => {
    return (<div className="removeli">
        <button onClick={()=>{
            prop.select(prop.id);
        }}>x</button>
        <li>{prop.val}</li>
    </div>);
}

export default ToDolist;