import React, { useState,useEffect } from 'react'
import ChartsHome from './Dashboard/SecondCharts/ChartsHome'
import ProjectIllustrations from './Dashboard/ProjectIllustrationsColorDevelopment/ProjectIllustrations'
import FourTaskStatusCard from './Dashboard/FirstStatusCards_EPT/FourTaskStatusCard'
import {PieData } from './Dashboard/SecondCharts/ChartData'
import axios from 'axios'
import { URL } from '../utilis/constant'
const Body = () => {
  const [LineData, setLineData] = useState([]);

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = async () => {
    try {
      const res = await axios.get(`${URL}/getchartdata`);
      setLineData(res.data);
      console.log(res.data)
      console.log(res.data.map((element) => element.overallResources).reduce((acc, obj) => acc + obj.Social, 0))
      // const pieData=
      const totals = {
        Social: res.data.map((element) => element.overallResources).reduce((acc, obj) => acc + obj.Social, 0),
        Referral: res.data.map((element) => element.overallResources).reduce((acc, obj) => acc + obj.Referral, 0),
        Direct: res.data.map((element) => element.overallResources).reduce((acc, obj) => acc + obj.Direct, 0)
    };
    // console.log(totals)

      // Update EarningData directly based on the response data
      const earningData = {
        labels: res.data.map((element) => element.month),
        datasets: [
          {
            label: 'Earnings',
            data: res.data.map((element) => element.earning),
          },
        ],
      };

      setEarningData(earningData);
      const pieChartData = {
        labels: pieData.labels, // Pass the labels array
        datasets: [{
          data: [totals.Social, totals.Referral, totals.Direct], // Pass the total values
          backgroundColor: pieData.datasets[0].backgroundColor,
          hoverBackgroundColor: pieData.datasets[0].hoverBackgroundColor,
          hoverBorderColor: pieData.datasets[0].hoverBorderColor,
          hoverOffset: pieData.datasets[0].hoverOffset,
        }]
      };
      
      setPieData(pieChartData);
      console.log(pieChartData)
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  // EarningData state directly in the component
  const [EarningData, setEarningData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Earnings',
        data: [],
      },
    ],
  });
  const [pieData, setPieData] = useState({
    labels: ['Social', 'Referral', 'Direct'], // Add labels for each category
    datasets: [{
      data: [],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: 'rgba(234, 236, 244, 1)',
      hoverOffset: 5,
    }]
  });

  return (
    <div>
        <FourTaskStatusCard/>
        <ChartsHome lineData={EarningData} pieData={pieData}/>
        <ProjectIllustrations/>
    </div>
  )
}

export default Body