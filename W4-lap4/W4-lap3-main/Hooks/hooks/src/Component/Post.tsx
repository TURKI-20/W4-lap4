import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function AddTask() {
    
    const [task , setTask] = React.useState("")
    const [disription , setDisription] = React.useState("")
    const [date , setDate] = React.useState("")
    
    const navigator = useNavigate()
const api ="https://63e213af3e12b193763728ac.mockapi.io/api/Turki"
const NewTask = ()=> {
    if(task.length >=3 && disription.length >=3 && date.length >= 3 ){
        axios.post(api, {
            task ,
            disription,
            date
     
})
.then
        ((res)=>{
            console.log(res);
    
})
    axios.get("https://63e213af3e12b193763728ac.mockapi.io/api/Turki")
    navigator("/")
    }else{
        alert("please write correct information")
    }

}
  return (
    <div>
        <h2>ADD NEW TASK : </h2>
        <div className='add'> 
         <input placeholder='Task ' type='text' onChange={e =>{setTask(e.target.value)}} ></input><br /><br />
        <input placeholder='disription the task ' type='text' onChange={e =>{setDisription(e.target.value)}} ></input><br /><br />
        <input placeholder='Date the task  ' type='date' onChange={e =>{setDate(e.target.value)}} ></input><br /><br />
        <button onClick={NewTask}>Add Task</button>
    </div></div>
  )
}
export default AddTask

