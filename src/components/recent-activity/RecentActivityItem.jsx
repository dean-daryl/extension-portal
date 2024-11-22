import React from 'react'
import { Link } from 'react-router-dom'

function RecentActivityItem({ activity }) {
  return (
    <>
        <Link to={`/dashboard/activity/${activity.id}`}>
        <div className='flex items-center justify-between  hover:bg-gray-200 p-2 rounded-md cursor-pointer' >
        <p className='text-[14px] text-gray-500'>
            {activity.title.replace(/^"|"$/g, '').slice(0, 26) + (activity.title.length > 30 ? '...' : '')}
        </p>
    </div>
    </Link>
    </>
    
  )
}

export default RecentActivityItem