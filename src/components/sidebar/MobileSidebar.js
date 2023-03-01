import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MobileSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)


   

  return (
    <>
      <aside>
        {showSidebar ? (
          <button
            className="flex text-2xl text-gray-400 items-center cursor-pointer fixed left-40 top-2 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute  z-20 flex items-center cursor-pointer left-10 top-10"
            fill="#000"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="80" height="10"></rect>
            <rect y="20" width="80" height="10"></rect>
            <rect y="40" width="60" height="10"></rect>
          </svg>
        )}

        <div
          className={`top-0 left-0 w-2/5 bg-white  p-10 pl-0 text- fixed h-[96%] z-40 
            
         ease-in-out duration-300 ${showSidebar ? 'translate-x-0 ' : 'hidden'}`}
        >

          <nav className="md:left-0  md:fixed  w-full m-auto  items-center relative  z-10  px-6 py-4 ">
            <div
              className="md:grid md:items-stretch md:max-h-full    px-2  
           items-center justify- w-full mx-auto"
            >
              {/* Brand */}

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
        </div>
      </aside>
    </>
  )
}

export default MobileSidebar
