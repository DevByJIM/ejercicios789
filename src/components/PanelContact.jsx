import { useState } from 'react'
import '../index.css';
import { Contacts } from '../controllers/contact.Controller';
import FormContact from './FormContact';

const PanelContacts = () => {

    const [contacts, setContacts] = useState(Contacts);

    const conection = (contact) => {
        try {
            const position = contacts.findIndex(item => item.name === contact.name);
            contacts[position].status = !contacts[position].status;
            setContacts([...contacts]);
            return
        } catch (error) {
            console.log(error);
        }
    }

    const addContact = (contact) => {
        try {
            const tempContact = contacts.filter(item => item.name === contact.name);
            if (tempContact.length === 0)
                setContacts([...contacts, contact]);
            return
        } catch (error) {
            console.log(error);
        }
    }

    const delContact = (contact) => {
        try {
            setContacts(contacts.filter(item => item.name !== contact.name));
            return
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
                                {
                                    (item.status) ?
                                        (<button className="btn btn-success me-1"
                                            onClick={() => conection(item)}>ONLINE</button>)
                                        :
                                        (<button className="btn btn-secondary me-1"
                                            onClick={() => conection(item)}>outline</button>)
                                }


                                <button className="btn btn-danger"
                                    onClick={() => delContact(item)}>DEL</button>
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
