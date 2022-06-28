

let Contacts = [
    {
        name: 'José Ignacio',
        status: true
    },
    {
        name: 'Merche',
        status: true
    },
    {
        name: 'Alicia',
        status: true
    },
    {
        name: 'Raquel',
        status: true
    }
]

export const listContacts = () => {
    try {
        return Contacts;
    } catch (error) {
        console.log(error)
    }

}

export const addContact = (Contact) =>{
    Contacts = [...Contacts,Contact ];
    return Contacts;
}




