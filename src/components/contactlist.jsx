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

                <div key={contact.name} className="bg-green-400 bg-opacity-50 border-2 filter drop-shadow-md border-green-600 hover:bg-green-500 filter drop-shadow-xl">
                    <ContactItem id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} handledelete={handledelete}></ContactItem>
                </div>
            )
        })

    )
}

export default ContactList;