import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Component/Effect'
import { Route, Routes } from 'react-router-dom'

import UpdateData from './Component/UpdateData';
import AddTask from './Component/Post';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
          <Route path='/' element={<Effect/>}></Route>
          <Route path='/creatBlog' element={<AddTask/>}></Route>
          <Route path='/Update' element={<UpdateData/>}></Route>


      </Routes>

    </div>
  )
}

export default App
