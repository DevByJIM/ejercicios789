import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const FormContact = ({ add }) => {

    const nameRef = useRef('');

    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            name: nameRef.current.value,
            status: true
        };
        contact.name !== '' && add(contact);
        nameRef.current.value ='';
    }

    return (
        <form className='m-4' onSubmit={addContact}>
            <div className='input-group'>

                <input
                    ref={nameRef}
                    type='text'
                    placeholder='Ingresa tu nombre'
                    className='form-control me-2'
                />
                <button type='submit' className='btn btn-primary '>ADD</button>
            </div>
        </form>
    )
}

FormContact.propTypes = {
    add: PropTypes.func.isRequired
}

export default FormContact
