import React from 'react'
import '../index.css';
import { listContacts,addContact } from '../controllers/contact.Controller';
import FormContact from './FormContact';

const PanelContacts = () => {

    let lstContact = listContacts();
    
    return (
        <>
            {lstContact.map((item, index) => {
                return (
                    <div key={index} className='card outline m-1'>
                        <div  className='card-header d-flex justify-content-between'>

                            <h4 >{index + 1}. {item.name}</h4>
                            <div>
                                <button className="btn btn-primary me-1">ONLINE</button>
                                <button className="btn btn-danger">DEL</button>
                            </div>
                        </div>
                    </div>

                )

            })}
            <FormContact add={addContact} />
        </>
    )
}

export default PanelContacts
