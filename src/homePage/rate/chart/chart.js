import React from 'react';
import './chart.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const options = {
    elements:{
      point:{
        // radius:5,
        hoverRadius:10,
      } 
    },
    plugins:{
      legend:{
        display: false,
      },
    },
    scales: {
        x: {
            grid: {
                display:false
            }
        },
        y: {
          suggestedMin: 2000,
          suggestedMax: 6500,
            grid: {
                display:false
            }   
        }
    },
    responsive: true,
};

const labels = ['0.1 USDT', '0.1 USDT', '0.1 USDT'];

const data = {
  labels,
  datasets: [
    {
      borderWidth: 5,
      data:[2000,4500,7000],
      
      borderColor: 'rgba(128,0,128)',
      // borderColor: "rgba(152,222,217,2)"
      // borderColor: 'linear-gradient(rgba(128,0,128,1) 0%, rgba(248,229,248,1) 100%)',
      // borderColor: 'linear-gradient(to right, #20f08b, #07dfb1)',
    },
  ],
}


const LineChart = () => {
    return(
        <div className='compo'>
            <Line options={options} data={data} />
        </div>
    ) 
}
export default LineChart