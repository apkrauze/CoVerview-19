/* import React from 'react'
import { Bar } from 'react-chartjs-2';


const BarGraph = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;


    return (
        <div 
        style={{
            width: '600px',
            height: '600px',
            margin: '50px auto'
        }}
    >
        <Bar
               data={{
                 labels: ['Infected', 'Recovered', 'Deaths'],
                 datasets: [
                   {
                     label: 'People',
                     backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                     data: [totalConfirmed, totalRecovered, totalDeaths],
                   },
                 ],
               }}
               
             />
       
           </div>
         
    )
}

export default BarGraph  */