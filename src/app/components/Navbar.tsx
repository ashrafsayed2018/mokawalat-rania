import Link from "next/link"
import { NavList, ServicesObject } from "../constants"
function Navbar() {
  return (

    <header>
        <nav className="bg-white sm:w-full  border-t border-gray-200 pb-2 mt-4 ">
          <ul className="navigation  w-full flex justify-between items-right relative mx-auto py-8" dir="rtl">
         
            <input type="checkbox" id="check" />

            <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-sm">
              {NavList.map(nav => {
                      return  <li key={nav.id} className="mr-6">
                      <Link  href={nav.id == "1"? '/home' : `/categories/${nav.id}`}>{nav.label}</Link>
                      </li>
                  })}

              <label htmlFor="check" className="close-menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

              </label>
            </span>

            <label htmlFor="check" className="open-menu animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="blue" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </label>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar