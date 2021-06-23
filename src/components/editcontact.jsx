import { useRef } from 'react'
import React from 'react'
import { useContext } from 'react'
import { ContactContext } from './Contactcontext'

function EditContact(props) {

    let newname = useRef()
    let newemail = useRef()
    let newphone = useRef()
    const getContactContext = useContext(ContactContext)
    const handleedit = getContactContext.handleedit

    function getnewdetails(e) {

        e.preventDefault()
        let edited = {
            id: props.id,
            name: newname.current.value,
            email: newemail.current.value,
            phone: newphone.current.value,
            resetedit: props.resetedit
        }

        newname.current.value = ""
        newemail.current.value = ""
        newphone.current.value = ""

        handleedit(edited)
        props.resetedit()
    }

    return (
        <div>
            <form>
                <input id="name" type="text" placeholder={props.name} ref={newname} /> <br />
                <input id="email" type="email" placeholder={props.email} ref={newemail} /><br />
                <input id="phone" type="number" placeholder={props.phone} ref={newphone} /><br />

                <button onClick={getnewdetails}>Confirm Edit</button>
            </form>
        </div>
    )
}

export default EditContact;