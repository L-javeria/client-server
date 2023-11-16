import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [Country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const submission = (e) => {
        e.preventDefault();

        if ((name && age && Country && phoneNumber ) !== null ){
         alert('Fill the form')

        } else {
          Axios.post('http://localhost:3002/add', {
            name: name,
            age: age,
            country: Country,
            phone_number: phoneNumber
          }).then(()=> console.log('success'))
          navigate('/')
        }

      }


  return (
    <div>
        <div className='info'>
      <label>Name</label>
      <input type='text' onChange={(event) => {
        setName(event.target.value)
      }}/>
      <label>Age</label>
      <input type='number' onChange={(event) => {
        setAge(event.target.value)
      }}/>
      <label>Country</label>
      <input type='text' onChange={(event) => {
        setCountry(event.target.value)
      }}/>
      <label>Phone Number</label>
      <input type='text' onChange={(event) => {
        setPhoneNumber(event.target.value)
      }}/>
      <button onClick={submission}> Add </button>
      </div>
    </div>
  )
}

export default Form