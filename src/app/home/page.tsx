"use client"
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import { NavList } from '../constants'
import Services from '../components/Services'
import ScrollToTop from "react-scroll-to-top";
import FixedContact from '../components/FixedContact'
import Footer from '../components/Footer'



export default function Home() {
  return (
     <>
      <div className="max-w-7xl mx-auto overflow-x-hidden mb-10">
       <div className="bg-white w-full fixed top-0 right left-0 z-50">
       <TopHeader/>
       <Navbar/>
       </div>
       <Hero/>
       <Services/>
       {NavList.map(nav => {
        if(nav.id != "1") {
          return <Category props={nav} key={nav.id}/>
        }
       
       })}
        <ScrollToTop smooth className='flex items-center justify-center bg-red-500' width='20px' height='20px' color="indigo" top={10} />
        <FixedContact/>
     </div>
      <Footer />
     </>
  )
}
