import { useRef } from 'react'

function AddContact(props) {


    let contactname = useRef()
    let contactemail = useRef()
    let contactphone = useRef()

    function getcontactform(e) {
        e.preventDefault()

        let newcontactdetails = {
            id: Math.floor((Math.random()) * 999999999999),
            name: contactname.current.value,
            phone: contactphone.current.value,
            email: contactemail.current.value
        }

        props.getcontact(newcontactdetails)

        contactname.current.value = ""
        contactphone.current.value = ""
        contactemail.current.value = ""
    }

    return (
        <div className="text-xl font-mono font-grey">
            <form>
                <div className="my-3">
                    <label className="mr-5" htmlFor="contactname">Enter Contact Name</label>
                    <input className="border-2 border-green-700" type="text" id="contactname" ref={contactname} required /><br />
                </div>

                <div className="my-3">
                    <label className="mr-5" htmlFor="contactphone">Enter Phone Number</label>
                    <input className="border-2 border-green-700" type="number" id="contactphone" ref={contactphone} required /><br />
                </div>

                <div className="my-3">
                    <label className="mr-5" htmlFor="contactemail">Enter Contact Email</label>
                    <input className="border-2 border-green-700" type="email" id="contactemail" ref={contactemail} required /><br />
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-grey py-2 px-4 mt-5" onClick={getcontactform}>Add to Contacts</button>
            </form>
        </div>
    )
}

export default AddContact