import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar.tsx'

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='flex h-screen w-full'>
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className={`flex-1 transition-all duration-100 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <main className='h-full overflow-auto bg-gray-100'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard