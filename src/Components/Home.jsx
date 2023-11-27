import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/form')
  }
  
  return (

    <div className='max-w-[800px] mt-[-97px] w-full h-screen mx-auto flex flex-col justify-center items-center' >
      <p className='text-5xl text-center mb-4 p-5'>Welcome to StaffTaggingHub</p>
      <button onClick={handleClick} className='bg-[#0023] m-4 py-5 px-10 rounded-lg font-medium font-mono '> Click me</button>
    </div>
  )
}

export default Home