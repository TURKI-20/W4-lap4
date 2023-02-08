import React from 'react'
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';


function Effect() {
    const [data , setData] =React.useState([])

const navigate = useNavigate()


   
    React.useEffect (()=>{
        axios.get("https://63e213af3e12b193763728ac.mockapi.io/api/Turki").then(res =>{
            
            console.log(res.data);
            setData(res.data);
            
            
        })

    },[])

    const DeleteItam= (id:string)=>{
        console.log(id);
        axios.delete(`https://63e213af3e12b193763728ac.mockapi.io/api/Turki/${id}`).then(res=>{
            setData(data.filter((del)=>{
            console.log(res);
            return del.id !=id
    })
      )  })
        
    }
  return (
        
    <div>

<h1>You can add task</h1>
<button onClick={()=>{navigate('/creatBlog')}}>HERE</button>
    {data.map((item:any)=>
    <ul className='eff'>
    <li key={item.id}>
        {"New Task is  : "+item.task }
    </li>
    <li key={item.id}>
        {"Discription  :"+" "+ item.disription}
    </li>
    <li key={item.id}>
        {"Date of Task : "+ " " + item.date}
    </li>
    <br />
    <button onClick={()=> {DeleteItam(item.id)}}>Delete task</button>
    
    <Link to= "/Update">
    <button onClick={()=> localStorage.setItem("id",item.id)}>Update task</button>
    </Link>
    </ul>
    
    )}
    </div>
  )
    }
export default Effect