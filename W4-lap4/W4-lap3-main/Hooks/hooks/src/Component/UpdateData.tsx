import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function UpdateData() {
    const [task , setTask] = React.useState("")
    const [disription , setDisription] = React.useState("")
    const [date , setDate] = React.useState("")
    const [id ,setId] =React.useState<any>()

    const navigator = useNavigate()
const api =`https://63e213af3e12b193763728ac.mockapi.io/Turki/${id}`


React.useEffect(()=> {
    setId(localStorage.getItem("id"));

} ,[])
const  update = async ()=> {
    
    
    if(task.length >=3 && disription.length >=3 ){
        axios.put(api, {
            task ,
            disription,
            date
    
     
})
.then
        ((res)=>{
            console.log(res);
    
})
    await axios.get("https://63e213af3e12b193763728ac.mockapi.io/Turki/")
    navigator("/")
    }else{
        alert("please write correct information")
    }

}
  return (
    <div>
        <h2>UPDATE THE TASK : </h2>
        <div className='update'>
        <input placeholder="new name's task " type='text' onChange={e =>{setTask(e.target.value)}} ></input><br /><br />
        <input placeholder='new Description task' type='text' onChange={e =>{setDisription(e.target.value)}} ></input><br /><br />
        <input placeholder='new Date' type='date' onChange={e =>{setDate(e.target.value)}} ></input><br /><br />
        <button onClick={update}>Update</button>
    </div></div>
  )
}
export default UpdateData

