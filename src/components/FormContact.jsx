import React from 'react'

const FormContact = ({add}) => {


const addContact = (e) =>{
  e.preventDefault();  
  const contact = {
      name: 'Luis',
      status: true
    };
    add(contact);
}

  return (
    <form className='m-4' onSubmit={addContact}>
        <div className='input-group'>

      <input 
      type='text'
      placeholder='Ingresa tu nombre'
      className='form-control me-2'
      />
      <button type='submit' className='btn btn-primary '>ADD</button>
      </div>
    </form>
  )
}

export default FormContact
