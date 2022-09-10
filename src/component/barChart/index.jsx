import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  registerables, 
  ArcElement,
  Chart
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);
Chart.register(ArcElement);


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BarChart = ({dataChart}) => {

  console.log("data Chart", dataChart);

  return (
    <div className='p-10 w-1/2 mx-auto bg-white rounded-md mb-10'>
      <Bar data={dataChart}/>
    </div>
  )
}

export default BarChart
