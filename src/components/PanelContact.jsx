import {useState, useEffect} from 'react'
import '../index.css';
import { listContacts, addContact, delContact } from '../controllers/contact.Controller';
import FormContact from './FormContact';

const PanelContacts = () => {

    let lstContacts = listContacts();

    const [contacts, setContacts] = useState (lstContacts);
    
    
    const addContact = (contact) => {
        try {
            setContacts([...contacts, contact]);  
        } catch (error) {
            console.log(error);
        }
    }
    
    const delContact = (contact) => {
        try {
            setContacts(contacts.filter(item => item.name !== contact.name));
            console.log({ contacts });
    
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            {contacts.map((item, index) => {
                return (
                    <div key={index} className='card outline m-1'>
                        <div className='card-header d-flex justify-content-between'>

                            <h4 >{index + 1}. {item.name}</h4>
                            <div>
                                <button className="btn btn-primary me-1">ONLINE</button>
                                <button className="btn btn-danger"
                                    onClick={delContact}>DEL</button>
                            </div>
                        </div>
                    </div>

                )

            })}
            <FormContact add={addContact}/>
        </>
    )
}

export default PanelContacts
