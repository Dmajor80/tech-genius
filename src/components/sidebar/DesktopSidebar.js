import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  


  return (
    <>
      <aside>
        <nav
          className="md:left-0 md:block md:fixed md:top-10 md:bottom-0 md:overflow-y-auto md:flex-row 
        md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between 
        relative md:w-64 z-10  px-6 py-4 "
        >
          <div
            className="md:grid md:items-stretch md:max-h-full    px-2  
           items-center justify- w-full mx-auto"
          >
            <div>
              <div className="py-10">
                <ul>
                  <li className="items-center hover:bg-gray-200 ">
                    <Link
                      className=" hover:text-[#8BC940] flex  gap-2 items-center text-xs uppercase py-3 font-bold "
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="items-center hover:bg-gray-200">
                    <Link
                      className="text-blueGray-700 hover:text-blueGray-500 text-xs flex  gap-2 items-center uppercase py-3 font-bold "
                      to="/department"
                    >
                      Department
                    </Link>
                  </li>

                  <li className="items-center hover:bg-gray-200">
                    <Link
                      className="text-blueGray-700 flex  gap-2 items-center hover:text-blueGray-500 text-xs uppercase py-3 font-bold "
                      to="/create"
                    >
                      Create / Edit department
                    </Link>
                  </li>

                  <li className="items-center hover:bg-gray-200">
                    <Link
                      className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold flex  gap-2 items-center"
                      to="/cr_employee"
                    >
                      Create / Edit Employee
                    </Link>
                  </li>

                  
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
