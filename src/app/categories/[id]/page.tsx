"use client"
import Category from '@/app/components/Category'
import FixedContact from '@/app/components/FixedContact'
import Footer from '@/app/components/Footer'
import Hero from '@/app/components/Hero'
import Navbar from '@/app/components/Navbar'
import TopHeader from '@/app/components/TopHeader'
import { NavList } from '@/app/constants'
import React from 'react'
import ScrollToTop from 'react-scroll-to-top'


type ParamsProps = {
  params: {
    id: string,
    slug: string,
  }
}
function Page({params}:ParamsProps) {
   const id = Number(params.id) - 1
   const item = NavList[id]
 
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-hidden mb-10">  
        <TopHeader/>
        <Navbar/>
        {/* <Hero/> */}
        <Category props={item} key={item.id}/>
        <ScrollToTop smooth className='flex items-center justify-center bg-red-500' width='30px' height='30px' color="indigo" top={10} />
        <FixedContact/>
      </div>
      <Footer/>
    </>
  )
}

export default Page