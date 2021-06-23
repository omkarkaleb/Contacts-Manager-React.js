import ContactItem from './contactitem'
import { useContext } from 'react'
import React from 'react'
import { ContactContext } from './Contactcontext'

function ContactList(props) {

    function handledelete(contacttodelete) {
        props.handledelete(contacttodelete)
    }

    const getContactContext = useContext(ContactContext)
    const contactlist2 = getContactContext.contactlist

    return (
        contactlist2.map((contact) => {
            return (

                <div key={contact.name} className="bg-green-200 bg-opacity-50 filter drop-shadow-md rounded hover:bg-green-300 filter drop-shadow-xl">
                    <ContactItem id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} handledelete={handledelete}></ContactItem>
                </div>
            )
        })

    )
}

export default ContactList;