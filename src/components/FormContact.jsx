import React from 'react'

const FormContact = () => {


  return (
    <form className='m-4'>
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
