import React from 'react'
import { FixedContactList, NavList, workTitle } from '../constants'
import Link from 'next/link'
import LogoImage from './LogoImage'

function Footer() {
  return (
    <div className='h-auto bg-indigo-800'>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 pt-12 py-8 text-right">
            {/* logo and company name */}

            <div className="logo w-full px-8">
                <LogoImage size={100}/>
                     <p className='text-white mt-8 text-xl text-right px-8'> {workTitle} </p>
            </div>

            {/* services and links */}

            <div className="services flex flex-col items-center justify-center text-white px-8">
                <h1 className='my-8 font-bold text-3xl'>خدماتنا </h1>
                 <ul className='text-right '>
                 
                       {NavList.map(nav => {
                      return  <li key={nav.id} className='p-2'>
                      <Link  href={nav.id == "1"? '/home' : `/categories/${nav.id}`}>{nav.label}</Link>
                      </li>
                  })}

                 </ul>
            </div>

            {/* contact us */}

            <div className="contact flex flex-col items-center ">

                 <h1 className='font-semibold text-white text-xl my-10'>تواصل معنا </h1>
                <ul className='flex gap-x-4 px-8'>
                    {FixedContactList.map(contact => {
                        return <li key={contact.link} className='l-2'>
                              <Link href={contact.link} className='font-bold text-xl flex'>
                                {contact.icon}
                              </Link>
                            </li>
                    })}
                </ul>
            </div>
        </div>
         
    </div>
  )
}

export default Footer