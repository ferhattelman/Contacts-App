import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Ferhat",
      phone_number: "12345"
    },
    {
      fullname: "Yağmur",
      phone_number: "1234"
    },
    {
      fullname: "Gizem",
      phone_number: "123"
    },
    {
      fullname: "Sevgi",
      phone_number: "12"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='Container'>
      <List contacts={contacts}></List>
      <Form addContact = {setContacts} contacts = {contacts}></Form>
    </div>
  )
}

export default Contacts