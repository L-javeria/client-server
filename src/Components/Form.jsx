import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Form = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [Country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  let location = useLocation();

  const handleAgeLimit = (event) => {
    if(event.target.value >= 0) { setAge(event.target.value) 
    } else{
    setAge(0)
    }
  }

  const submission = (e) => {
    e.preventDefault();

    if ((name && Country && phoneNumber) === null) {
      alert('Fill the form')
      console.log(location.pathname)

    } else {
      Axios.post('http://localhost:3002/add', {
        name: name,
        age: age,
        country: Country,
        phone_number: phoneNumber
      }).then(() => console.log('success'))
      navigate('/wish')
    }

  }


  return (
    <div className='p-24 bg-slate-300 flex flex-col items-center'>
      <div className='flex flex-row items-center'>
        <div className='flex flex-col items-center mx-[100px]'>
          <label className='m-4 ' >Name</label>
          <label className='m-4'>Age</label>
          <label className='m-4'>Country</label>
          <label className='m-4'>Phone Number</label>
        </div>
        <div className='flex flex-col m-4'>
          <input className='my-3 h-8 px-3 ' type='text' onChange={(event) => {
            setName(event.target.value)
          }} />
          <input className='my-3 h-8 px-3' type='number' value={age} onChange={handleAgeLimit} />
          <input className='my-3 h-8 px-3' type='text' onChange={(event) => {
            setCountry(event.target.value)
          }} />
          <input className='my-3 h-8 px-3' type='text' onChange={(event) => {
            setPhoneNumber(event.target.value)
          }} />
        </div>
      </div>
        <div className='text-center bg-[#0023] m-8 py-5 px-20 rounded-lg font-medium font-mono '>
          <button onClick={submission}> Add </button>
        </div>
    </div>
  )
}

export default Form