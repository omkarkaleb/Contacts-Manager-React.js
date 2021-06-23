import './App.css';
import React from 'react'
import Header from './components/header'
import ContactList from './components/contactlist'
import AddContact from './components/addcontact'
import { useState } from 'react'
import { ContactContext } from './components/Contactcontext'

function App() {

  const [contactlist, setcontactlist] = useState([])

  function getcontact(newcontactdetails) {
    setcontactlist(arr => [...arr, newcontactdetails])
  }

  function handledelete(contacttodelete) {
    setcontactlist(contactlist.filter(item => item.id != contacttodelete))
  }

  function handleedit(edited) {
    let contactlisttemp = contactlist

    let targetcontact = contactlisttemp.filter(item => item.id === edited.id)

    let newid = 0
    let newname = ""
    let newemail = ""
    let newphone = 0


    newid = targetcontact[0].id

    if (edited.name == "") {
      newname = targetcontact[0].name
    } else {
      newname = edited.name
    }

    if (edited.email == "") {
      newemail = targetcontact[0].email
    } else {
      newemail = edited.email
    }

    if (edited.phone == "") {
      newphone = targetcontact[0].phone
    } else {
      newphone = edited.phone
    }

    let newcontacttoadd =
    {
      id: newid,
      name: newname,
      email: newemail,
      phone: newphone
    }

    let contactlisttemp2 = contactlisttemp.filter(item => item.id != newid)
    contactlisttemp2.push(newcontacttoadd)
    setcontactlist(contactlisttemp2)
  }

  return (
    <div>
      <div className=" p-1 pl-20 border-b-2 border-green-600">
        <Header></Header>
      </div>
      <div className="">
        <ContactContext.Provider value={{ contactlist: contactlist, handleedit: handleedit }}>
          <div className="mt-10 grid grid-cols-3 gap-4 p-1 pl-20">
            <ContactList handledelete={handledelete}></ContactList>
          </div>
          <div className="mt-10 border-t-2 border-green-600 p-1 pl-20">
            <AddContact getcontact={getcontact}></AddContact>
          </div>
        </ContactContext.Provider>
      </div>
    </div>
  );
}

export default App;
