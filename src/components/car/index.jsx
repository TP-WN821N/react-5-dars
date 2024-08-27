import React from 'react'
import { useParams } from 'react-router-dom'

const Car = (props) => {
  const { data, setData } = props
  const { id } = useParams()
  const car = data.find(item => item.id === id)
  return (
    <div>
      <h1 className='text-3xl'>Car name: {car.name}</h1>
      <h1 className='text-3xl'>Car Price: {car.price}</h1>
      <h1 className='text-3xl'>Car Year: {car.year}</h1>
      <h1 className='text-3xl'>Car Color: {car.color}</h1>
    </div>
  )
}

export default Car