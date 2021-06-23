import { useState } from 'react'
import EditContact from './editcontact'

function ContactItem(props) {

    const [editstate, seteditstate] = useState(false)

    function getdelete(e) {
        let contacttodelete = e.target.id
        props.handledelete(contacttodelete)
    }

    function getedit() {
        seteditstate(true)
    }

    return (
        <div>
            {editstate ? <EditContact
                id={props.id}
                name={props.name}
                phone={props.phone}
                email={props.email}
                resetedit={() => { seteditstate(false) }}
            ></EditContact> :

                <div>
                    <p>{props.name}</p>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                    <button id={props.id} onClick={getdelete}>Delete this Contact</button>
                    <button id={props.id} onClick={getedit}>Edit this Contact</button>
                </div>
            }
        </div>
    )
}

export default ContactItem;