import React, { useEffect, useState } from 'react'
import { getRecentActivity} from '../../api/recentActivityService.js';
import { getDateRange } from '../../utils/dateUtils';
import RecentActivityItem from './RecentActivityItem.jsx';

function RecentActivities({}) {
    const [todayRecentActivity, setTodayRecentActivity] = useState([]);
    const [yesterdayRecentActivity, setYesterdayRecentActivity] = useState([]);
    const [last7DaysRecentActivity, setLast7DaysRecentActivity] = useState([]);
    const [last30DaysRecentActivity, setLast30DaysRecentActivity] = useState([]);

    useEffect(() => {
        const fetchTodayActivity = async () => {
          const {startDate, endDate} = getDateRange('today');
          const recentActivities  = await getRecentActivity(
            '2ec00c00-3d0a-4124-9060-69847a6287ca',
            startDate,
            endDate,
            1,
            10
          );
          setTodayRecentActivity(recentActivities.content);
        };
        const fetchYesterdayActivity = async () => {
            const {startDate, endDate} = getDateRange('yesterday');
           
            const recentActivities = await getRecentActivity(
                '2ec00c00-3d0a-4124-9060-69847a6287ca',
                    startDate,
                    endDate,
                1,
                10
            );
            setYesterdayRecentActivity(recentActivities.content);
        };
        const fetchLast7DaysActivity = async () => {
            const {startDate, endDate} = getDateRange('last7Days');
            const recentActivities = await getRecentActivity(
                '2ec00c00-3d0a-4124-9060-69847a6287ca',
                startDate,
                endDate,
                1,
                10
            );
            setLast7DaysRecentActivity(recentActivities.content);
        };
        const fetchLast30DaysActivity = async () => {
            const {startDate, endDate} = getDateRange('last30Days');
            const recentActivities = await getRecentActivity(
                '2ec00c00-3d0a-4124-9060-69847a6287ca',
                startDate,
                endDate,
                1,
                10
            );
            setLast30DaysRecentActivity(recentActivities.content);
        };
        fetchTodayActivity();
        fetchYesterdayActivity();
        fetchLast7DaysActivity();
        fetchLast30DaysActivity();
      }, []);
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-start justify-between'>
            <h3 className='text-base font-medium'>Today</h3>
            <div className='flex flex-col gap-1'>
                {todayRecentActivity && todayRecentActivity?.map((activity, index) => (
                    <RecentActivityItem key={index} activity={activity} />
                ))}
            </div>    
        </div>
        <div className={`flex flex-col items-start justify-between ${yesterdayRecentActivity.length === 0 ? 'hidden' : ''}`}>
            <h3 className='text-base font-medium'>Yesterday</h3>
            <div className='flex flex-col gap-1'>
                {yesterdayRecentActivity && yesterdayRecentActivity?.map((activity, index) => (
                    <RecentActivityItem key={index} activity={activity} />
                ))}
            </div>    
        </div>
        <div className={`flex flex-col items-start justify-between ${last7DaysRecentActivity.length === 0 ? 'hidden' : ''}`}>
            <h3 className='text-base font-medium'>Last 7 days</h3>
            <div className='flex flex-col gap-1'>
                {last7DaysRecentActivity && last7DaysRecentActivity?.map((activity, index) => (
                    <RecentActivityItem key={index} activity={activity} />
                ))}
            </div>    
        </div>
        <div className={`flex flex-col items-start justify-between ${last30DaysRecentActivity.length === 0 ? 'hidden' : ''}`}>
            <h3 className='text-base font-medium'>Last 30 days</h3>
            <div className='flex flex-col gap-1'>
                {last30DaysRecentActivity && last30DaysRecentActivity?.map((activity, index) => (
                    <RecentActivityItem key={index} activity={activity} />
                ))}
            </div>    
        </div>
    </div>
  )
}

export default RecentActivities;