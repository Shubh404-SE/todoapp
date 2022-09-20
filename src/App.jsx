import React, { useState } from "react";
import ToDolist from "./ToDolist";
import ToDoinput from "./ToDoinput";

const App =()=>{

    const [item, setitem] = useState([]);
    const [itemname, setname] = useState();

    const inputval = (event) =>{
        setname(event.target.value);
    }

    const enter =()=>{
        setitem((olditem) =>{
            return [...olditem, itemname];
        });
        setname("");
    }

    const deleteitem=(id)=>{
        setitem((olditem)=>{
            return olditem.filter((arr, index)=>{
                return index !== id;
            });
        });
    };

    return(
        <div className="main_div">
            <div className="box">
                <ToDoinput  inval={inputval} itname={itemname} submit={enter}/>
                <div className="addedlist">
                    <ol>
                        {/* <li>{itemname}</li>  */}

                        {item.map((ival, index) =>{
                            return <ToDolist 
                            key ={index} 
                            id ={index} 
                            val ={ival}
                            select={deleteitem}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default App;