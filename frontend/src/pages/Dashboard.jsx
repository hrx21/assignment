import { useEffect, useState, useMemo } from "react";
import NavBar from "../reusable/navbar";
import axios from '../api/axios'
import {Chart} from 'react-charts'

const Dashboard = () => {

  const data = [
    {
      label: 'Sales',
      data: [
        {
          date: new Date(),
          stars: 202123,
          sales: "Sales" 
        }
      ]
    },
    {
      label: 'Total Users',
      data: [
        {
          date: new Date(),
          stars: 10234230,
          users: "Total Users"
        }
        // ...
      ]
    },
    {
      label: 'Total Subscription Boxes',
      data: [
        {
          date: new Date(),
          stars: 10234230,
          subscription: "Total Subscription Boxes"
        }
        // ...
      ]
    },

  ]

  const primaryAxis = useMemo(
    () => ({
      getValue: datum => datum.date,
    }),
    []
  )

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: datum => datum.stars,
      },
    ],
    []
  )

    return ( 
        <>
        <div className="bg-white h-[calc(115vh-95px)]">
        <NavBar/>
        <div>Sales, Total Users, Total Subscription Boxes</div>
        <Chart
         options={{
         data,
         primaryAxis,
         secondaryAxes,
         }}
        />
        </div>
        </>
     );
}
 
export default Dashboard;