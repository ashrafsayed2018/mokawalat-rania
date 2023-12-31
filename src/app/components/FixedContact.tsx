import React from 'react'
import { FixedContactList } from '../constants'
import Link from 'next/link'

function FixedContact() {
  return (
	<div className='fixed left-4 bottom-4 z-50  shadow-lg'>
     
     <ul>
        {FixedContactList.map(contact => {
          return <li key={contact.name} className='bg-white w-14 h-14 flex justify-center items-center  rounded-full mb-2 shadow-sm shadow-gray-800'>
            <Link href={contact.link}>
            {contact.icon}
            </Link>
          </li>
        })}
     </ul>
		
	</div>
  )
}

export default FixedContact