import { ReactNode } from 'react'

function ContactIcon({children}: {children: ReactNode}) {
  return (
    <div className='flex items-center gap-3 h-16'>
       {children}
    </div>

  )
}

export default ContactIcon