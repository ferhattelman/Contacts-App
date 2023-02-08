import React, { useState } from 'react'
import Contacts from '..'

export default function List({contacts}) {

  const [filter, setFilter] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    );
  });

  return (
    <div>

      <input placeholder='Filter Contact' value={filter} onChange={(event) => setFilter(event.target.value)}></input>

      <ul>
        {filtered.map((contact, i) => (<li key={i}><span>{contact.fullname}</span> <span>{contact.phone_number}</span></li>))}
      </ul>

      <p>
        {filtered.length}
      </p>
    </div>
  )
}
