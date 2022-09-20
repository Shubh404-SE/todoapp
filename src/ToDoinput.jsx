import React from "react";

const ToDoinput = (props) => {

    return (
        <>
            <br />
            <h1>ToDo List</h1>
            <br />
            
                <input type="text" placeholder="Add Itemes" onChange={props.inval} value={props.itname} />
                <button onClick={props.submit} className="add">+</button>
        </>
    );
}

export default ToDoinput;