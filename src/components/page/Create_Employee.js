import React from 'react'
import DesktopSidebar from '../sidebar/DesktopSidebar'
import CreateEmployee from '../cr_employee/Create_Employee'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobileSidebar from '../sidebar/MobileSidebar'

export default function Dashboard() {
  return (
    <div>
      <div className="border-2 border-black flex items-center gap-2">
        <GiHamburgerMenu className="text-3xl mx-2 " />
        <h1 className="uppercase text-black text-3xl">
          hr administration system
        </h1>
      </div>
      <section className="w-1/1 relative flex justify-between">
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 lg:hidden ">
          <MobileSidebar />
        </div>
        <div className="hidden w-[30%] lg:grid  flex-col items-center justify-center min-h-screen py-2 ">
          <DesktopSidebar />
        </div>
        <div className="relative w-[90%] md:w-[70%] m-auto  md:pt-32 pb-32 pt-12  ">
          <CreateEmployee className="absolute   md:pt-32 pb-32 pt-12  " />
        </div>
      </section>
    </div>
  )
}
