import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu, FiUser } from "react-icons/fi";
import { AiOutlineRobot } from "react-icons/ai";
import sidebar from "../../public/assets/sidebar.svg"
import RecentActivities from "./recent-activity/RecentActivities";


function SideBar({isOpen, setIsOpen}) {
  const firstname = localStorage.getItem("firstname") ?? "";

  return (
    <>
      <div className={`fixed top-0 left-0 h-screen flex flex-col justify-between bg-slate-50 shadow-lg transition-all ${isOpen ? 'w-75' : 'w-0'} overflow-hidden`}>
        {isOpen && (
          <>
            <div className="sticky top-0 py-4 px-4 flex items-center justify-between bg-slate-50 w-full">
              <div className="logo font-bold text-2xl z-50">
                <Link to="/dashboard" className="flex items-center">
                  <AiOutlineRobot
                    size={40}
                    className="text-blue-600 mr-3"
                  />
                  <h1 className="text-base font-bold text-black">SomaTek AI</h1>
                </Link>
              </div>
              <button className="p-1 hover:bg-slate-200 rounded-full" onClick={() => setIsOpen(false)}>
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <div className="py-4 px-6 bg-slate-50">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="py-4 px-4 bg-slate-50">
                <RecentActivities />
              </div>
            </div>
            <div className="mt-auto">
              {/* <div className="w-full h-px bg-gray-300"></div> */}
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50">
                <FiUser className="w-10 h-10 text-gray-600" />
                <h3 className="text-sm font-medium">{firstname}</h3>
              </div>
            </div>
          </>
        )}
      </div>

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed top-0 left-0 p-5 md:p-7 z-50 hover:opacity-80 transition-opacity"
        >
          <img src={sidebar} alt="Open sidebar" className="w-[20px] md:w-[40px] h-[30px] md:h-[40px]" />
        </button>
      )}
    </>
  );
}

export default SideBar;
