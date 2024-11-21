import React from "react";
import { fetchAnalyticsData } from "../api/analyticsService";
import useFetch from "../api/useFetch";

import Skeleton from "./Skeleton.jsx";
import { AiOutlineRobot } from "react-icons/ai";
import AnalyticsReChart from "./charts/AnalyticsRechart.jsx";
import { getDateRange } from "../utils/dateUtils.js";


const Home = () => {
  const ranges = ["today", "lastWeek", "thisMonth", "thisQuarter"];
  const firstname = localStorage.getItem("firstname") ?? "";

  const fetchDataForRange = (range) => {
    const { startDate, endDate } = getDateRange(range);
    return useFetch(() =>
      fetchAnalyticsData(startDate, endDate)
    );
  };

  const results = ranges.map((range) => fetchDataForRange(range));

  const loading = results.some((result) => result.loading);
  const error = results.some((result) => result.error);

  if (loading) {
    return (
      <div className="p-4 md:p-20 lg:p-20">
        <div className="flex flex-col pt-10 md:flex-row justify-between items-center border-t border-b border-gray-300 px-3 py-5 rounded-t-md">
          <Skeleton width="200px" height="30px" />
          <div className="flex gap-3 sm:gap-5 items-center">
            <Skeleton width="30px" height="30px" borderRadius="50%" />
            <Skeleton width="30px" height="30px" borderRadius="50%" />
            <Skeleton width="30px" height="30px" borderRadius="50%" />
          </div>
        </div>

        <div className="p-4 sm:p-5 mr-0 sm:mr-3 mb-0">
          <div className="flex justify-center sm:justify-start">
            <Skeleton width="100%" height="48px" borderRadius="8px" />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="p-4 sm:p-5 flex flex-col gap-4">
          <h2 className="text-lg px-4 py-4 border-b border-gray-300">
            <Skeleton width="150px" height="20px" />
          </h2>
          <div className="flex justify-center">
            <Skeleton width="100%" height="300px" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xs shadow-lg flex items-center justify-center">
        <AiOutlineRobot size={50} className="mr-3" />
        <h1 className="text-2xl font-medium">SomaTek AI</h1>
      </div>
      <div className="p-8 md:p-20 lg:p-20">
        <div className="flex flex-col pt-10 md:flex-row justify-between items-center border-b border-gray-300 px-3 py-5 rounded-t-md">
          <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-0">
            Welcome back {firstname} 👋
          </h1>
        </div>

        {/* Analytics Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ranges.map((range, index) => {
            const data = results[index].data || [];
            const transformedData = Object.entries(data).map(([keyword, count]) => ({
                    keyword,
                    count,
                  }));

            return (
              <div
                key={range}
                className="p-4 sm:p-5 flex flex-col gap-4 mb-6 border border-gray-300 rounded-lg"
              >
                <h2 className="text-lg px-4 py-4 border-b border-gray-300 capitalize">
                  {range.charAt(0).toUpperCase() +
                    range.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                  Analytics
                </h2>

                <AnalyticsReChart data={transformedData} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
