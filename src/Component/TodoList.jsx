import { Button } from "@mui/material";
import React,{useState} from "react";

export const TodoList =()=>{
    const [data,setData]=useState("")
    const [item,setItem]=useState([])
    const [data1,setData1] =useState([])


    const handeleAdd =() =>{
        setItem ((oldItem)=>{
            return( [...oldItem, data]
                )
        })
        setData("")
        // const handleDelete =(index) =>{
        //     const deleteData =data1.filter((item,ind)=>ind !=index
        //          )
        //     setData1(deleteData)
        // }

    }
    return (
        <div className="app">
            <h1>ToDo List</h1>
            <input type="text"
            value={data}
            onChange={(e)=>setData(e.target.value)} />
            <button onClick={()=>handeleAdd()}>Add</button>
            <button variant="contained"color="error">
                            Delete
                            </button>
             <ul>
                {/* <li>{data}</li> */}
                {item.map((itemvel,index)=>{
                    return<li>{itemvel}</li>
                })}
            </ul>
        </div>
    )
}
