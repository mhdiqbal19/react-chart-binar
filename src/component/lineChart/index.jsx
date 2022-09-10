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
import { Line } from 'react-chartjs-2';

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

const LineChart = ({dataPay}) => {
    console.log("data pay", dataPay);
  return (
    <div className='m-10'>
        <Line data={dataPay}/>
    </div>
  )
}

export default LineChart