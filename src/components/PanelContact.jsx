import React from 'react'
import '../index.css';
import { listContacts,addContact } from '../controllers/contact.Controller';
import FormContact from './FormContact';

const PanelContacts = () => {

    let lstContact = listContacts();
    console.log("asd" + lstContact)
    return (
        <>
            {lstContact.map((item, index) => {
                return (
                    <div className='card outline m-1'>
                        <div key={index} className='card-header d-flex justify-content-between'>

                            <h4 >{index + 1}. {item.name}</h4>
                            <div>
                                <button className="btn btn-primary me-1">ONLINE</button>
                                <button className="btn btn-danger">DEL</button>
                            </div>
                        </div>
                    </div>

                )

            })}
            <FormContact />
        </>
    )
}

export default PanelContacts
