

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


export const addContact = (contact) => {
    try {
        Contacts = [...Contacts, contact];
        console.log({ Contacts });
        return Contacts;

    } catch (error) {
        console.log(error);
    }
}

export const delContact = (contact) => {
    try {
        const tempContact = Contacts.filter(item => item.id !== itemId);
        Contacts = [...Contacts, contact];
        console.log({ Contacts });
        return Contacts;

    } catch (error) {
        console.log(error);
    }
}




