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

                <div className="text-lg">
                    <div>
                        <p className="pl-10 py-2 text-3xl font-semibold text-gray-800 border-b-2 border-green-500">{props.name}</p>
                    </div>
                    <div className="pl-10 pt-5">
                        <p><span className="font-medium">Phone: </span>{props.phone}</p>
                        <p><span className="font-medium">Email: </span>{props.email}</p>
                    </div>
                    <div className="w-100 mt-6 grid grid-cols-2">
                        <div className="inline-block bg-red-500 bg-opacity-75 hover:bg-red-600">
                            <button className="inline-block py-2 px-12" id={props.id} onClick={getdelete}>DELETE</button>
                        </div>

                        <div className="inline-block bg-green-500 bg-opacity-75 hover:bg-green-800">
                            <button className="inline-block py-2 px-12" id={props.id} onClick={getedit}>EDIT</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ContactItem;