import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Cars from './components/cars'
import Car from './components/car'

const App = () => {
  const [data, setData] = useState([])
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cars' element={<Cars data={data} setData={setData} />} />
      <Route path='/cars/:id' element={<Car data={data} setData={setData} />} />
    </Routes>
  )
}

export default App